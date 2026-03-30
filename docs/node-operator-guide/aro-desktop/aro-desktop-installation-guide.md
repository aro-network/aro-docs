---
id: aro-desktop-installation-guide
title: "ARO Desktop Installation Guide"
sidebar_label: "Installation Guide"
---

# ARO Desktop Installation Guide

## Supported Operating Systems

**ARO Desktop** currently supports the following desktop operating systems:

- macOS
- Windows
- Linux

## macOS Installation Guide

### Step 1: Download the macOS Package from Dashboard

1. Go to **Dashboard -> Add New Node**.
2. Choose **macOS** as your system.
3. Download the `.dmg` installer.

![Download DMG from Dashboard](/img/node-operator-guide/aro-desktop-installation/dmg-install-1.png)

### Step 2: Install and Open ARO Desktop (Handle macOS Security Prompt)

1. Open the downloaded `.dmg` file.
2. Drag the **ARO Desktop** app icon into **Applications**.
3. Open **Applications** and launch **ARO Desktop**.
4. You may see a macOS prompt saying the app cannot be opened.

This is expected in some environments because the app can be recognized as coming from an unidentified developer signature by macOS security checks.

![Drag ARO Desktop to Applications](/img/node-operator-guide/aro-desktop-installation/dmg-install-2.png)

![Allow ARO Desktop in Privacy & Security](/img/node-operator-guide/aro-desktop-installation/dmg-install-3.png)

5. Open **System Settings**.
6. Go to **Privacy & Security**.
7. In the **Security** section, find the blocked message for **ARO Desktop**.
8. Click **Open Anyway**.

### Step 3: Start ARO Desktop and Get Node SN

1. Launch **ARO Desktop** again.
2. You should now see the app startup screen.

![ARO Desktop Startup Screen](/img/node-operator-guide/aro-desktop-installation/add-node-1.png)

3. Click **Start** to run the node.
4. The app will generate a **Serial Number (SN)**.

### Step 4: Bind the Node in Dashboard

1. Return to **Dashboard -> Add New Node**.
2. Start the node-adding flow.
3. Enter the generated **SN** and follow the on-screen instructions.
4. Complete the first-time node binding.

![Bind SN in Dashboard](/img/node-operator-guide/aro-desktop-installation/add-node-2.png)

## Windows Installation Guide

### Step 1: Download the Windows Installer from Dashboard

1. Go to **Dashboard -> Add New Node**.
2. Choose **Windows** as your system.
3. Download the `.exe` installer.

### Step 2: Run the Installer and Follow the Setup Wizard

1. Locate the downloaded `.exe` file and double-click to run it.
2. Follow the installer wizard steps carefully.

![Windows Installer Welcome](/img/node-operator-guide/aro-desktop-installation/windows-install-1.png)

![Windows Installation Step 2](/img/node-operator-guide/aro-desktop-installation/windows-install-2.png)

![Windows Installation Step 3](/img/node-operator-guide/aro-desktop-installation/windows-install-3.png)

![Windows Installation Step 4](/img/node-operator-guide/aro-desktop-installation/windows-install-4.png)

![Windows Installation Step 5](/img/node-operator-guide/aro-desktop-installation/windows-install-5.png)

![Windows Installation Complete](/img/node-operator-guide/aro-desktop-installation/windows-install-6.png)

3. Once the installation is complete, ARO Desktop will be ready to use.

### Step 3: Start ARO Desktop and Get Node SN

1. Launch **ARO Desktop** from your Start Menu or desktop shortcut.
2. You should now see the app startup screen.

![ARO Desktop Startup Screen](/img/node-operator-guide/aro-desktop-installation/windows-add-node-1.png)

3. Click **Start** to run the node.
4. The app will generate a **Serial Number (SN)**.

### Step 4: Bind the Node in Dashboard

1. Return to **Dashboard -> Add New Node**.
2. Start the node-adding flow.
3. Enter the generated **SN** and follow the on-screen instructions.

![Bind SN in Dashboard](/img/node-operator-guide/aro-desktop-installation/windows-add-node-2.png)

![Node Binding Confirmation](/img/node-operator-guide/aro-desktop-installation/windows-add-node-3.png)

4. Complete the first-time node binding.
5. Your Windows ARO Desktop node is now ready to operate!

## Linux Installation Guide

ARO Desktop supports both Debian/Ubuntu-based and RPM-based (CentOS/RHEL) Linux systems.

---

### Debian / Ubuntu

#### Step 1: Download the Linux Package from Dashboard

1. Go to **Dashboard -> Add New Node**.
2. Choose **Linux** as your system.
3. Download the `.deb` installer.

#### Step 2: Install ARO Desktop

```bash
sudo apt install ./ARO_Desktop_<version>_amd64.deb
```

Replace `<version>` with the actual filename you downloaded.

#### Step 3: Start ARO Desktop and Bind Your Node

1. Launch **ARO Desktop**.
2. Click **Start** to run the node.
3. The app will generate a **Serial Number (SN)**.
4. Go to **Dashboard -> Add New Node**.
5. Enter the SN and complete the binding flow.

#### Uninstall (Debian / Ubuntu)

```bash
sudo apt purge aro-desktop
```

---

### CentOS

#### Step 1: Download the Linux Package from Dashboard

1. Go to **Dashboard -> Add New Node**.
2. Choose **Linux** as your system.
3. Download the `.rpm` installer.

#### Step 2: Install ARO Desktop

```bash
sudo dnf install -y ./ARO_Desktop-<version>-1.x86_64.rpm
```

Replace `<version>` with the actual filename you downloaded.

:::tip Missing dependencies?
If the installation fails due to missing packages (e.g. `webkit2gtk4.1`), enable EPEL and CRB first, then retry:

```bash
sudo dnf install -y epel-release
sudo dnf config-manager --set-enabled crb
sudo dnf install -y ./ARO_Desktop-<version>-1.x86_64.rpm
```
:::

#### Step 3: Start ARO Desktop and Bind Your Node

1. Launch **ARO Desktop**.
2. Click **Start** to run the node.
3. The app will generate a **Serial Number (SN)**.
4. Go to **Dashboard -> Add New Node**.
5. Enter the SN and complete the binding flow.

#### Uninstall (CentOS)

```bash
sudo dnf remove aro-desktop
```

---

### Troubleshooting

#### Incomplete uninstall on Debian / Ubuntu

If `apt purge` leaves residual package state, manually clean the dpkg status entry:

1. Open the dpkg status file:

```bash
sudo nano /var/lib/dpkg/status
```

2. Search for the `aro-desktop` block: press `Ctrl + W`, type `aro-desktop`, then press `Enter`.

3. Delete the entire block starting from `Package: aro-desktop` through the end of that entry.

4. Save and exit: `Ctrl + O` → `Enter` → `Ctrl + X`.

5. Repair dpkg and fix broken packages:

```bash
sudo dpkg --configure -a
sudo apt --fix-broken install
```

6. Refresh the desktop application database:

```bash
sudo update-desktop-database
```

#### Kill ARO Desktop process (if needed)

```bash
pkill -f aro-desktop
```

