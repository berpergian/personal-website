/* Thin scrollbar in the primary blue (same as the tab underline).
   Usage: sx={(theme) => ({ ...thinBlueScrollbar(theme), ... })} */
export function thinBlueScrollbar(theme) {
  return {
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.primary.main} transparent`,
    '&::-webkit-scrollbar': { width: 6 },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 3,
    },
  };
}
