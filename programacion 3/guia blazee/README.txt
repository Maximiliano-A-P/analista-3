Preguntas en las guias
guia 1 


3)
las rutas que se agregaron son:
auth.php
cambios en web.php


los controles que se agregaron son las de auth
app\Http\Controllers\Auth\AuthenticatedSessionController.php
app\Http\Controllers\Auth\ConfirmablePasswordController.php
app\Http\Controllers\Auth\EmailVerificationNotificationController.php
app\Http\Controllers\Auth\EmailVerificationPromptController.php
app\Http\Controllers\Auth\NewPasswordController.php
app\Http\Controllers\Auth\PasswordController.php
app\Http\Controllers\Auth\PasswordResetLinkController.php
app\Http\Controllers\Auth\RegisteredUserController.php
app\Http\Controllers\Auth\VerifyEmailController.php

app\Http\Controllers\ProfileController.php


las vistas que se crearon son:
app\View\Components\AppLayout.php
app\View\Components\GuestLayout.php

4) me dice que introduzca el correo, pero luego no me llego ningun mail

5)si no pusiera teléfono en fillable me salta error, ya que si le pasas un campo que no está en el modelo laravel no lo permite por protección.

pregunta final: 
La diferencia entre usar blade y auth facade manualmente, es que ya te da un montón de modelos predefinidos estándar,que suelen estar en todos los proyectos ahorrando tiempo, incluyendo la lógica de la autenticación y sesiones. 


guia 2

3) el campo de contraseña no puede ser obligatorio si se tiene login con google

6) si cancela el registro con google, se lo redirige a la ruta callback. 
si el usuario ya estaba registrado dependera de como se maneje el registro, si este permite que se agregue a los datos ya existente o no, si lo permite tendra los 2 accesos.
