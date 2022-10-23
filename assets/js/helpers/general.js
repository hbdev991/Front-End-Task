/*
General basic helper functions that can be reused across platform
as list grows it should be separated into relevant modules
*/

export const noSpaceLowercase = (text="") => { // Default text to empty string to avoid errors when no args are passed
    return text.replace(/ /g, '').toLowerCase()
}