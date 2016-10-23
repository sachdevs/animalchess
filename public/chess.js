// init socket
var socket = io();

// create board
var b = jsboard.board({attach:"game", size:"9x7"});
b.cell("each").style({width:"60px", height:"60px", background: '#d8d8d8'});
colorBoard(b);

function colorBoard(b) {
    // Color water
    b.cell([3, 1]).style({'background': '#c4daff'}); // [N, M] N down, M across
    b.cell([4, 1]).style({'background': '#c4daff'});
    b.cell([5, 1]).style({'background': '#c4daff'});
    b.cell([3, 2]).style({'background': '#c4daff'});
    b.cell([4, 2]).style({'background': '#c4daff'});
    b.cell([5, 2]).style({'background': '#c4daff'});

    b.cell([3, 4]).style({'background': '#c4daff'});
    b.cell([4, 4]).style({'background': '#c4daff'});
    b.cell([5, 4]).style({'background': '#c4daff'});
    b.cell([3, 5]).style({'background': '#c4daff'});
    b.cell([4, 5]).style({'background': '#c4daff'});
    b.cell([5, 5]).style({'background': '#c4daff'});

    // Color trap/win
    b.cell([0, 3]).style({'background': '#ff9977'});
    b.cell([0, 2]).style({'background': '#c66865'});
    b.cell([0, 4]).style({'background': '#c66865'});
    b.cell([1, 3]).style({'background': '#c66865'});

    b.cell([8, 3]).style({'background': '#ff9977'});
    b.cell([8, 2]).style({'background': '#c66865'});
    b.cell([8, 4]).style({'background': '#c66865'});
    b.cell([7, 3]).style({'background': '#c66865'});
}

// load pieces into memory
// red 
var r_cat = jsboard.piece({text:"r_cat", textIndent:"-9999px", background:"url('images/r_cat.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_dog = jsboard.piece({text:"r_dog", textIndent:"-9999px", background:"url('images/r_dog.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_elephant = jsboard.piece({text:"r_elephant", textIndent:"-9999px", background:"url('images/r_elephant.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_leopard = jsboard.piece({text:"r_leopard", textIndent:"-9999px", background:"url('images/r_leopard.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_lion = jsboard.piece({text:"r_lion", textIndent:"-9999px", background:"url('images/r_lion.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_rat = jsboard.piece({text:"r_rat", textIndent:"-9999px", background:"url('images/r_rat.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_tiger = jsboard.piece({text:"r_tiger", textIndent:"-9999px", background:"url('images/r_tiger.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var r_wolf = jsboard.piece({text:"r_wolf", textIndent:"-9999px", background:"url('images/r_wolf.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });

// blue
var b_cat = jsboard.piece({text:"b_cat", textIndent:"-9999px", background:"url('images/b_cat.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_dog = jsboard.piece({text:"b_dog", textIndent:"-9999px", background:"url('images/b_dog.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_elephant = jsboard.piece({text:"b_elephant", textIndent:"-9999px", background:"url('images/b_elephant.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_leopard = jsboard.piece({text:"b_leopard", textIndent:"-9999px", background:"url('images/b_leopard.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_lion = jsboard.piece({text:"b_lion", textIndent:"-9999px", background:"url('images/b_lion.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_rat = jsboard.piece({text:"b_rat", textIndent:"-9999px", background:"url('images/b_rat.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_tiger = jsboard.piece({text:"b_tiger", textIndent:"-9999px", background:"url('images/b_tiger.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });
var b_wolf = jsboard.piece({text:"b_wolf", textIndent:"-9999px", background:"url('images/b_wolf.png') no-repeat", 'background-size': 'contain', width:"60px", height:"60px", margin:"0 auto" });

// pointers to dom objects corresponding to pieces
var r_pieces = [
    r_cat.clone(),
    r_dog.clone(),
    r_elephant.clone(),
    r_leopard.clone(),
    r_lion.clone(),
    r_rat.clone(),
    r_tiger.clone(),
    r_wolf.clone()
];

var b_pieces = [
    b_cat.clone(),
    b_dog.clone(),
    b_elephant.clone(),
    b_leopard.clone(),
    b_lion.clone(),
    b_rat.clone(),
    b_tiger.clone(),
    b_wolf.clone()
];

var piece_dict = {
   cat: 0,
   dog: 1,
   elephant: 2,
   leopard: 3,
   lion: 4,
   rat: 5,
   tiger: 6,
   wolf: 7
}

// place pieces
b.cell([6,0]).place(r_pieces[2]); b.cell([2,6]).place(b_pieces[2]);
b.cell([6,2]).place(r_pieces[7]); b.cell([2,4]).place(b_pieces[7]);
b.cell([6,4]).place(r_pieces[3]); b.cell([2,2]).place(b_pieces[3]);
b.cell([6,6]).place(r_pieces[5]); b.cell([2,0]).place(b_pieces[5]);
b.cell([7,1]).place(r_pieces[0]); b.cell([1,5]).place(b_pieces[0]);
b.cell([7,5]).place(r_pieces[1]); b.cell([1,1]).place(b_pieces[1]);
b.cell([8,0]).place(r_pieces[6]); b.cell([0,6]).place(b_pieces[6]);
b.cell([8,6]).place(r_pieces[4]); b.cell([0,0]).place(b_pieces[4]);

// variables for piece to move and its locs
var bindMoveLocs, bindMovePiece;
var pieces = b_pieces.concat(r_pieces);

// give functionality to pieces
for (var i=0; i<r_pieces.length; i++) {
    r_pieces[i].addEventListener("click", function() { showMoves(this); });
    b_pieces[i].addEventListener("click", function() { removeOccupant(this); });
}

// show new locations 
function showMoves(piece) {

    resetBoard();

    var thisPiece = b.cell(piece.parentNode).get();
    var loc = b.cell(piece.parentNode).where();
    var newLocs = [];
    
    newLocs.push(
        [loc[0]-1,loc[1]],   [loc[0]+1,loc[1]],
        [loc[0],loc[1]-1],   [loc[0],loc[1]+1]
        );

    // bind green spaces to movement of piece
    bindMoveLocs = newLocs.slice();
    bindMovePiece = piece; 
    bindMoveEvents(bindMoveLocs);

}

// bind move event to new piece locations
function bindMoveEvents(locs) {
    for (var i=0; i<locs.length; i++) {
        b.cell(locs[i]).DOM().classList.add("green");
        b.cell(locs[i]).on("click", movePiece);  
    }
}

// actually move the piece
function movePiece() {
    var userClick = b.cell(this).where();

    if (bindMoveLocs.indexOf(userClick)) {
        b.cell(userClick).place(bindMovePiece);

        console.log(b.cell(this).get());
        var piecename = b.cell(this).get();
        socket.emit('piece move', {
            loc: userClick,
            piece: piecename
        });
        resetBoard();
    }
}

// remove previous green spaces and event listeners
function resetBoard() {
    for (var r=0; r<b.rows(); r++) {
        for (var c=0; c<b.cols(); c++) {
            b.cell([r,c]).DOM().classList.remove("green");
            b.cell([r,c]).removeOn("click", movePiece);
        }
    }
}

function removeOccupant(piece) {
    b.cell(piece.parentNode).rid();
}

// invert moves for opp events
function flipLocs(loc) {
    return [8-loc[0], 6-loc[1]];
}

// handle socket events
socket.on('opponent moved', function(move){
    var piece_index = piece_dict[move.piece.split('_')[1]];
    var piece_color = move.piece.split('_')[0];
    var piece;
    if (piece_color == 'b') {
        piece = r_pieces[piece_index];
    } else {
        piece = b_pieces[piece_index];
    }

    b.cell(flipLocs(move.loc)).place(piece);
    console.log(move);
});