import { Translations } from "..";

export const SpanishTranslations: Translations = {
    WelcomeName: "Bienvenido/a a skeld.net",
    WelcomeMessage: `
Somos el primer servidor personalizado de Among Us del mundo
Escribe /help sí necesitas ayuda
Modo de juego actual: @{gamemode[0]}

¡Suscríbete a nuestro Patreon https://www.patreon.com/skeld_net para tener un nombre de usuario de colores!`.trim(),
    SetImpostorsInvalidCount:
        "Número de impostores inválido, por favor introduzca un número entre 1 y 3",
    SetImpostorsSuccess: "El número de impostores es @{number[0]}",
    ZombiesIncomingIn: "Los zombies aparecerán en @{number[0]} segundos",
    GamemodeChangedTo: "Modo de juego cambiado a @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Pulsa el botón de reunión antes de que el tiempo se acabe",
    SquidGameDalgonaInstructions:
        "Completa todas tus tareas antes de que el tiempo se acabe",
    SquidGameTugOfWarInstructions:
        "Muévete en la dirección correcta para tirar del otro equipo",
    StartingIn: "Empezando en: ",
    MaxPlayersModeSwitch:
        "El anfitrión cambió el número de jugadores y ahora la sala está llena",
};
