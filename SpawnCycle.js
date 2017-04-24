var SpawnCycle = function() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var fighters = _.filter(Game.creeps, (creep) => creep.memory.role == 'fighter');
    if(harvesters.length < creepCount['harvesters']) {
        var newName = this.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        //console.log('Spawning new harvester: ' + newName);
    } else if(upgraders.length < creepCount['upgraders']) {
        var newName = this.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        //console.log('Spawning new upgrader: ' + newName);
    } else if(builders.length < creepCount['builders']) {
        var newName = this.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        //console.log('Spawning new builder: ' + newName);
    }
};

module.exports = SpawnCycle;
