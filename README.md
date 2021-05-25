# UpgradeableProxy-SmartContract
Ref => https://docs.openzeppelin.com/upgrades-plugins/1.x/truffle-upgrades

โปรเจคนี้ใช้ truffle ในการจำลอง network ขึ้นมานะครับ
โดยขั้นตอนวิธีการรันทั้งหมดมีดังนี้นะครับ
1.  รัน network ด้วยคำสั่ง npx truffle develop ตรงนี้เราจะได้เจ้าตัว url กับ public key และ private key มาด้วย
2.  รัน deploy ด้วยตำสั่ง npx tuffle migrate --network development --reset //ตรงนี้เราจะได้เจ้าตัว contract address มานะครับ
3.  รันไฟล์ app.js เข้าไปที่ src เเล้วพิมพ์คำสั่ง node app.js 

เอา url, contractAddress, privateKey ที่ได้ไปไว้ในไฟล์ src/shared/variables.js
เพียงเท่านี้เราก็สามารถทดลองใช้เจ้าตัว UpgradeableProxy-SmartContract เเล้วครับ
สงสัยตรงไหนสามารถสอบถามได้นะครับ จะตอบเท่าที่ตอบได้นะครับ 
Facebook : https://www.facebook.com/arim.mn.10/
