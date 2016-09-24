// Shows list of roles for a user

var roles = function(message) {
    var userRoles = message.server.rolesOfUser(message.mentions[0]);
    var userRoleNames = [];
    
    for(var role in userRoles){
        userRoleNames.push(userRoles[role].name);
    }
    var messageToSend = 'The user mentioned has the following roles: ';
    
    if(userRoleNames.length == 0){
        messageToSend = 'The user mentioned has no roles.';    
    }
    if(userRoleNames.length == 1){
        messageToSend = 'The user mentioned has this role: ';    
    }
    message.client.sendMessage(channel, messageToSend + userRoleNames.join());

};

module.exports = roles;
