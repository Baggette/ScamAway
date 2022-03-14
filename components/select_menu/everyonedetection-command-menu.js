// Copyright (C) 2022  Marcus Huber (Xenorio)

// This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.

const util = require('../../util/util')

module.exports.run = async(client, interaction) => {

    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
        interaction.reply({ content: "Only administrators are allowed to change settings!", ephemeral: true })
        return
    }

    let settings = await util.getSettings(interaction.guildId)

    switch (interaction.values[0]) {
        case "enable":
            settings.everyoneDetection = true
            break;

        case "disable":
            settings.everyoneDetection = false
            break;

        default:
            break;
    }

    util.setSettings(interaction.guildId, settings)

    interaction.reply({ content: 'Settings saved!', ephemeral: true })
}