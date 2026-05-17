<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Exception;

class GoogleController extends Controller
{
    /**
     * Redirige al usuario a la página de autenticación de Google.
     */
    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtiene la información del usuario desde Google y gestiona el inicio de sesión.
     */
    public function handleGoogleCallback(): RedirectResponse
    {
        try {
            // Obtenemos los datos del usuario desde Google de forma segura
            $googleUser = Socialite::driver('google')->user();
            
            // Buscamos si ya existe por su google_id o por su email
            $user = User::where('google_id', $googleUser->id)
                        ->orWhere('email', $googleUser->email)
                        ->first();

            if ($user) {
                // Si el usuario ya existía pero no tenía el google_id (se registró antes de forma tradicional)
                // actualizamos sus datos para enlazar la cuenta de Google
                if (empty($user->google_id)) {
                    $user->update([
                        'google_id' => $googleUser->id,
                        'provider_name' => 'google',
                    ]);
                }
            } else {
                // Si no existe, creamos el usuario nuevo en la base de datos
                $user = User::create([
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'google_id' => $googleUser->id,
                    'provider_name' => 'google',
                    'password' => null, // Queda nulo ya que entra con Google
                    'telefono' => '',   // Queda vacío o puedes pedirlo después si es obligatorio
                ]);
            }

            // Iniciamos la sesión del usuario en Laravel
            Auth::login($user);

            // Redirigimos al dashboard (o a la sección secreta que creamos antes)
            return redirect()->intended(route('dashboard', absolute: false));

        } catch (Exception $e) {
            // Si algo falla (por ejemplo, el usuario cancela el login en Google), lo mandamos al login con un error
            return redirect()->route('login')->withErrors([
                'email' => 'Hubo un problema al iniciar sesión con Google. Inténtalo de nuevo.',
            ]);
        }
    }
}