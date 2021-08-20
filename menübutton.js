let option1 = new MessageMenuOption()
        .setLabel("Option 1")
        .setValue("Option 1")
        .setDescription("This will give u the option 1")
        .setDefault()
        .setEmoji("😁")
        
        let option2 = new MessageMenuOption()
            .setLabel("Option 2")
            .setValue("Option 2")
            .setDescription("This will give u the option 2")
            .setDefault()
            .setEmoji("😄")
        let option3 = new MessageMenuOption()
            .setLabel("Option 3")
            .setValue("Option 3")
            .setDescription("This will give u the option 3")
            .setDefault()
            .setEmoji("🤩")
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Click me to make a Selection! | POG")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM").setTitle("SELECT NO!")

let button1 = new MessageButton()
  .setStyle('url')
  .setURL('https://botlands.com/')
  .setLabel('Website');
let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://botlands.com/')
  .setLabel('İnvite'); 
let button3 = new MessageButton()
  .setStyle('url')
  .setURL('https://botlands.com/')
  .setLabel('Support Server'); 

  const row = new MessageActionRow()
  .addComponent(selection)
  const ro = new MessageActionRow()
  .addComponent([button1, button2, button3])

        let menumsg = await message.channel.send({embed: embed , components: [ro, row]})

        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send("the reply for option 1", true)
                break;
                case "Option 2": 
                    menu.reply.send("the reply for option 2", true)
                break;
                case "Option 3": 
                    menu.reply.send("the reply for option 3", true)
                break;
            }
        }

        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send(":x: you are not allowed to pick something", true)
            }
        })
    }
})