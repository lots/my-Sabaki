my-Sabaki 0.60.2 — USB / portable build
my-Sabaki 0.60.2 — U 盘 / 便携版
=====================================

Study fork of Sabaki. Unstable, unsupported.
For real use, get the original: https://github.com/SabakiHQ/Sabaki
Sabaki 的学习分支，不稳定、无技术支持。正式使用请用原项目。

How to use / 使用方法
---------------------
1. Copy this whole folder to the USB stick. Any name, any location.
2. Double-click my-Sabaki.exe.
3. Everything the app saves -- settings, themes, engine list, window layout --
   goes into the "data" folder created next to the exe. The stick carries its
   own state and nothing is left behind on the host machine.

1. 把整个文件夹复制到 U 盘，位置与名称随意。
2. 双击 my-Sabaki.exe。
3. 设置、主题、引擎列表、窗口布局等全部保存在 exe 旁边自动创建的 data 文件夹里；
   状态随 U 盘走，宿主机不留痕迹。

Keep the folder structure intact. my-Sabaki.exe looks for portable.marker next
to itself; without that file it falls back to %APPDATA%\my-Sabaki.
请保持目录结构完整：my-Sabaki.exe 依赖同目录下的 portable.marker；缺少该文件时会退回
到 %APPDATA%\my-Sabaki。

What is in this fork / 本分支的改动
-----------------------------------
- Coloured lines and arrows (SGF: AR[dd:pq:red])
- Dim tool: grey out a rectangle (SGF DD, tints in SBKDD)
- Right-click erases the segment you point at, or the topmost dimmed rectangle
- Open/Save dialogs remember the last folder
- Scoring follows the record's RU rules; Play > Scoring Method overrides

- 彩色线与箭头（SGF：AR[dd:pq:red]）
- 遮罩工具：把矩形区域变暗（SGF DD，颜色存于 SBKDD）
- 右键删除所指线段，或最上层的遮罩矩形
- 「打开 / 另存为」记住上次所在目录
- 计分方式依棋谱 RU 规则；可在「对局 → 计分方式」中覆盖

If the window does not appear / 如果窗口没有出现
------------------------------------------------
Open a terminal in this folder and run:
在本文件夹打开终端并运行：

    .\my-Sabaki.exe --no-sandbox

then check the exit code / 然后查看退出码：

    echo $LASTEXITCODE

    0xC0000005  (-1073741819)  Electron/Chromium crashed during startup
    0xC0000003  (-1073740797)  Chromium sandbox could not initialise

These point at the folder or the machine blocking Electron, not at my-Sabaki:
never run it straight out of the archive, out of Program Files, or out of a
folder a security tool restricts.
这类错误通常是所在目录或系统阻止了 Electron，而非程序本身的问题：不要直接从压缩包
内运行，也不要放在 Program Files 或受安全软件限制的目录。

Removing it / 卸载
------------------
Delete the folder. That is all -- no registry entries, no installer.
直接删除文件夹即可，不写注册表，也没有安装程序。

Licence / 许可证
----------------
MIT, unchanged from upstream. Copyright (c) 2015-2026 Yichuan Shen and the
Sabaki contributors. See https://github.com/SabakiHQ/Sabaki
MIT，与原项目一致。版权归 Yichuan Shen 与 Sabaki 贡献者所有。
