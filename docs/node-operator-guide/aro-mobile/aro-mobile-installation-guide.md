---
id: aro-mobile-installation-guide
title: "ARO Mobile Installation Guide"
sidebar_label: "Installation Guide"
---

# ARO Mobile Installation Guide

## About ARO Mobile

**ARO Mobile** is the ARO node app for mobile operating systems (phones).

- **Currently supported:** Android
- **Coming soon:** iOS

This guide focuses on Android installation and setup.

## Before You Start

Please prepare the following:

- An Android phone with stable internet access
- Your ARO account (Dashboard)
- Permission to install the ARO Mobile APK on your device

You can start from **ARO Dashboard -> Add a New Node**, then choose **ARO Mobile**.

## Android Installation Steps

### Step 1: Install the APK

1. Download the ARO Mobile APK from **Dashboard -> Add a New Node**.
2. Tap the downloaded `.apk` file.
3. Tap **Install**.
4. After installation completes, tap **Open**.

![Step 1.1 - Download APK](/img/node-operator-guide/aro-mobile-installation/install-apk-1.jpg)

![Step 1.2 - Install APK](/img/node-operator-guide/aro-mobile-installation/install-apk-2.jpg)

![Step 1.3 - Open ARO Mobile](/img/node-operator-guide/aro-mobile-installation/install-apk-3.jpg)

### Step 2: Allow Notifications

When the app first launches, Android may ask:

**"Allow ARO Mobile to send you notifications?"**

Tap **Allow**.

Notifications help you receive node status and important runtime updates.

![Step 2 - Allow Notifications](/img/node-operator-guide/aro-mobile-installation/allow-notification.jpg)

### Step 3: Optimize App Performance (Required)

To keep your node stable in the background, complete the performance settings:

1. In the **Optimize App Performance** prompt, tap **Go to Setting**.
2. Open your phone settings path:
	**Settings -> Battery -> Background usage limits -> Never auto sleeping apps**
3. Add **ARO Mobile** to **Never auto sleeping apps**.

This prevents Android from putting ARO Mobile to sleep and interrupting node uptime.

![Step 3.1 - Optimize App Performance](/img/node-operator-guide/aro-mobile-installation/auto-sleep-1.jpg)

![Step 3.2 - Go to Settings](/img/node-operator-guide/aro-mobile-installation/auto-sleep-2.jpg)

![Step 3.3 - Add to Never Auto Sleeping Apps](/img/node-operator-guide/aro-mobile-installation/auto-sleep-3.jpg)

### Step 4: Bind the Node to Dashboard

1. In ARO Mobile, copy the node **SN**.
2. Go to the ARO Dashboard.
3. Paste and bind the SN to your node entry.
4. Confirm the node status becomes **Connected**.

![Step 4.1 - Copy Node SN](/img/node-operator-guide/aro-mobile-installation/add-node-1.jpg)

![Step 4.2 - Bind SN in Dashboard](/img/node-operator-guide/aro-mobile-installation/add-node-2.jpg)

![Step 4.3 - Complete Binding](/img/node-operator-guide/aro-mobile-installation/add-node-3.jpg)

![Step 4.4 - Node Connected](/img/node-operator-guide/aro-mobile-installation/add-node-4.jpg)

## Quick Troubleshooting

- **Node not staying online:** Recheck battery/background settings and confirm ARO Mobile is in **Never auto sleeping apps**.
- **Cannot bind node:** Verify the SN is copied fully and pasted into the correct Dashboard field.
- **No updates shown:** Keep notification permission enabled and ensure internet access is stable.

If you still have issues, continue with:

- [FAQ & Troubleshooting](./aro-mobile-faq-troubleshooting)
