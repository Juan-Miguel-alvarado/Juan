export const USES = {
  intro:
    "Arch Linux, tiled, and recoloured from whatever wallpaper is up. Everything below is what actually runs on the machine — the long version lives in the guide.",
  sourceUrl: "https://github.com/Juan-Miguel-alvarado/arch-customization-guide",
  groups: [
    {
      title: "Desktop",
      items: [
        { name: "Arch Linux + Omarchy", note: "rolling base" },
        { name: "Hyprland", note: "compositor, JaKooLit's dots on top" },
        { name: "Waybar", note: "bar — swappable layouts and styles" },
        { name: "Rofi", note: "launcher and wallpaper picker" },
        { name: "swaync", note: "notifications" },
        { name: "Hyprlock + Hypridle", note: "lock and idle" },
        { name: "SwayOSD", note: "volume and brightness" },
      ],
    },
    {
      title: "Theming",
      items: [
        { name: "Matugen", note: "Material You palette generated from the wallpaper" },
        { name: "swww", note: "wallpaper daemon" },
        {
          name: "One palette everywhere",
          note: "Hyprland, Waybar, Kitty and GTK regenerate together",
        },
      ],
    },
    {
      title: "Terminal",
      items: [
        { name: "Kitty", note: "JetBrainsMono NF, 90% opacity" },
        { name: "Bash + Starship", note: "shell and prompt" },
        { name: "tmux", note: "Ctrl+Space prefix, vi keys" },
        { name: "zoxide, fzf, eza, bat", note: "the usual replacements" },
        { name: "ripgrep + fd", note: "search" },
        { name: "Lazygit / Lazydocker", note: "git and docker TUIs" },
        { name: "btop + fastfetch", note: "monitoring" },
      ],
    },
    {
      title: "Code",
      items: [
        { name: "Neovim (LazyVim)", note: "editor" },
        { name: "Rust", note: "CLIs and anything that has to be fast" },
        { name: "TypeScript", note: "everything on the web" },
        { name: "Flutter", note: "mobile" },
        { name: "mise", note: "runtime manager" },
        { name: "deepsearch", note: "my own file search, installed from cargo" },
      ],
    },
  ],
} as const;
