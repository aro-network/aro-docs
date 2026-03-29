---
id: aro-desktop-faq-troubleshooting
title: "ARO Desktop FAQ & Troubleshooting"
sidebar_label: "FAQ & Troubleshooting"
---

# FAQ & Troubleshooting

- **My startup app icon is not shown in the tray area. If I click Quit from the taskbar menu, the app cannot be opened again.**  
  This behavior can happen on GNOME desktops because tray support depends on shell extensions.

  1. Install the extension manager tool:

  ```bash
  sudo apt update
  sudo apt install gnome-shell-extension-manager
  ```

  2. Install tray support extension:
	  - Open **Extension Manager**.
	  - Search and install **AppIndicator and KStatusNotifierItem Support**.

  3. Enable the extension:
	  - Open **Extension Manager**.
	  - Find **AppIndicator and KStatusNotifierItem Support**.
	  - Turn the switch **ON**.

  4. Restart GNOME:
	  - Press **Alt + F2**.
	  - Type `r` and press Enter.
	  - If this does not work on Wayland, reboot your computer directly.
