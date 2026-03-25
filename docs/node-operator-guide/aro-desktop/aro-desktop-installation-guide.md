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

This section is reserved and will be added soon.

## Linux Installation Guide

ARO Desktop on Linux currently supports RPM-based installation for CentOS/RHEL-like systems.

### Install with RPM (CentOS 10 / newer RHEL-like systems)

#### Step 1: Enable EPEL and CRB

```bash
sudo dnf install -y epel-release
sudo dnf config-manager --set-enabled crb
```

#### Step 2: Install ARO Desktop RPM

```bash
sudo dnf install -y ./ARO_Desktop-0.1.0-1.x86_64.rpm
```

### Run and Bind Your Node

1. Start ARO Desktop.
2. Click **Start** and get your node **Serial Number (SN)**.
3. Go to **Dashboard -> Add New Node**.
4. Enter the SN and finish the binding flow.

### Uninstall

#### RPM uninstall

```bash
sudo dnf remove aro-desktop
```

### Troubleshooting

#### Kill ARO Desktop process (if needed)

```bash
pkill -f aro-desktop
```

