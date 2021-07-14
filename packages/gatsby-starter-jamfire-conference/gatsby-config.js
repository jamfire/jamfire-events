module.exports = {
  /**
   * Flags
   */
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  /**
   * Plugins
   */
  plugins: [
    {
      resolve: `gatsby-theme-jamfire-conference`,
    },
  ],
}
