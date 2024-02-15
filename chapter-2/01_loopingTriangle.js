//Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// solotuin
for (let line = "#"; line.length < 8; line += "#") console.log(line);

function loopingTriangle(length) {
    for (let line = "#"; line.length <= length; line += "#") console.log(line);
}

loopingTriangle(5);
