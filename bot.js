 const Discord = require('discord.js');
 const client = new Discord.Client();
 
-if(message.content.startsWith(prefix)) return
+//if(message.content.startsWith(prefix)) return
 
 client.on('ready', () => {
     console.log('I am ready!');
 });
 
-var prefix = '&'
+var PREFIX = '&'
 
 client.on('message', message => {
-    
     //чтобы бот не реагировал если сообщение не начинается с префикса
-    if(!message.content.startsWith(prefix)) return
+    if (!message.content.startsWith(PREFIX) || message.content.startsWith(PREFIX + PREFIX)) return
+    var args = message.content.substring(PREFIX.length).split(" ");
+    //метод
+		switch (args[0].toLowerCase()) {
 
-    if (message.content === prefix+'ping') {
+        case "ping":
         message.channel.send('PONG!');
-      }
-    if (message.content === prefix+'bing') {
-        message.reply('BONG!');
-      }
-    if (message.content === prefix+'how-are-you') {
-        message.reply('NICE!');
-     }
-});
+        break;
+
+        case "bing":
+        message.channel.send('BONG!');
+        break;
+
+        case "how are you":
+        message.channel.send('NICE!');
+        break;
 
+        }})
 
 client.login(process.env.BOT_TOKEN);
