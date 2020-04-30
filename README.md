# hwd3x-lte-band-mod-tool

## Overview

Speed Wi-Fi NEXT の LTE Band API をキックするツール

## Description

Speed Wi-Fi NEXT の LTE Band 1, 3, 5, 17, 18, 41, 42 の有効/無効化を Windows PC 上から行うことができます。
Rakut○n UN-LIMIT とかで LTE Band 3 を有効化するときとかに使えるかと。 (「W04 L01 LTEBand」にかなり近しい実装状況。「HW EntityList」には追いついておらず。)


WiMAX のハイスピードエリアモードやハイスピードプラスエリアモードの設定については設定できないため、ツールとは別の場所で設定が必要です。

動作保証なし。ご利用は自己責任で。


## Test environment

テスト環境は以下の通り。
macOS 向けのファイルもあるが、検証環境がないため、未検証。

### Hardware

* Speed Wi-Fi NEXT W05 (HWD35)

### Software

* Microsoft Windows 10 Pro (Version 1909, 64-bit)
* Google Chrome 80.0.3987.163 (Official Build, 64-bit)
* Mongoose Web Server for Windows 6.9 (Free)
* jsSHA 3.1.0 (2020/04/15)


## Usage

### Setup

1. Google Chrome をインストール

Download Link: https://www.google.com/chrome/

2. Mangoose Web Server をダウンロードして以下の位置に配置

Download Link: https://cesanta.com/binary.html

Windows:
```
<contents_root>\mongoose.exe
```

Mac:
```
<contents_root>\Mongoose.app
```


3. jsSHA をダウンロードして以下の位置に配置

Download Link: https://github.com/Caligatio/jsSHA

```
<contents_root>\scripts\js\sha.js
<contents_root>\scripts\js\sha256.js
```


### Usage

1. 以下のスクリプトを実行し、サーバ起動 + Chrome (--disable-web-security オプションつき) を起動

Windows:
```
<contents_root>\win_chrome_start-with-disable-web-security.bat
```

Mac:
```
<contents_root>\mac_chrome_start-with-disable-web-security.command
```

2. ブラウザ上の「Address」と「Password」に必要情報を入力

3. 「GET」ボタンを押し、設定情報を取得

4. 設定したい LTE Band にチェックを入れる

5. 「SET」ボタンを押して、設定を反映

6. 「GET」ボタンを押して、設定情報を取得し、設定値が反映されていることを確認

### Uninstall

1. 以下のスクリプトでサーバを停止

Windows:
```
<contents_root>\win_stop.bat
```

Mac:
```
<contents_root>/mac_stop.command
```

2. フォルダごと削除


## License
This script is released under the MIT license. See the LICENSE file.


## Author
* tag (Twitter: [@tag_ism](https://twitter.com/tag_ism "tag (@tag_ism) | Twitter") / Blog: http://karat5i.blogspot.jp/)
