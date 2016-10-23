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

// place pieces
b.cell([6,0]).place(r_pieces[2]); b.cell([2,6]).place(b_pieces[2]);
b.cell([6,2]).place(r_pieces[7]); b.cell([2,4]).place(b_pieces[7]);
b.cell([6,4]).place(r_pieces[3]); b.cell([2,2]).place(b_pieces[3]);
b.cell([6,6]).place(r_pieces[5]); b.cell([2,0]).place(b_pieces[5]);
b.cell([7,1]).place(r_pieces[0]); b.cell([1,5]).place(b_pieces[0]);
b.cell([7,5]).place(r_pieces[1]); b.cell([1,1]).place(b_pieces[1]);
b.cell([8,0]).place(r_pieces[6]); b.cell([0,6]).place(b_pieces[6]);
b.cell([8,6]).place(r_pieces[4]); b.cell([0,0]).place(b_pieces[4]);

// var bishop = jsboard.piece({text:"WB", textIndent:"-9999px", background:"url('images/chess/bishop.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
// var rook   = jsboard.piece({text:"WR", textIndent:"-9999px", background:"url('images/chess/rook.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
// var queen  = jsboard.piece({text:"WQ", textIndent:"-9999px", background:"url('images/chess/queen.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
// var king   = jsboard.piece({text:"WG", textIndent:"-9999px", background:"url('images/chess/king.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });
// var pawn   = jsboard.piece({text:"WP", textIndent:"-9999px", background:"url('images/chess/pawn.png') no-repeat", width:"50px", height:"50px", margin:"0 auto" });

// // create pieces to place in DOM
// var whitePieces = [
//     knight.clone(),
//     knight.clone(),
//     bishop.clone(),
//     bishop.clone(),
//     rook.clone(),
//     rook.clone(),
//     queen.clone(),
//     king.clone()
// ];
// for (var i=0; i<8; i++) 
//     whitePieces.push(pawn.clone());

// // place pieces on board
// b.cell([7,1]).place(whitePieces[0]); b.cell([7,6]).place(whitePieces[1]);
// b.cell([7,2]).place(whitePieces[2]); b.cell([7,5]).place(whitePieces[3]);
// b.cell([7,0]).place(whitePieces[4]); b.cell([7,7]).place(whitePieces[5]);
// b.cell([7,3]).place(whitePieces[6]);
// b.cell([7,4]).place(whitePieces[7]);
// for (var i=8; i<whitePieces.length; i++) 
//     b.cell([6,i-8]).place(whitePieces[i]);

// // variables for piece to move and its locs
// var bindMoveLocs, bindMovePiece;

// // give functionality to pieces
// for (var i=0; i<whitePieces.length; i++) 
//     whitePieces[i].addEventListener("click", function() { showMoves(this); });

// // show new locations 
// function showMoves(piece) {

//     resetBoard();
        
//     // parentNode is needed because the piece you are clicking 
//     // on doesn't have access to cell functions, therefore you 
//     // need to access the parent of the piece because pieces are 
//     // always contained within in cells

//     // piece clicked on will be either: WK, WB, WR, WQ, WG, WP
//     var thisPiece = b.cell(piece.parentNode).get();
//     var newLocs = [];
//     var loc;
//     loc = b.cell(piece.parentNode).where();

//     // movement for knights
//     if (thisPiece=="WK") {
//         newLocs.push(
//             [loc[0]-1,loc[1]-2], [loc[0]-1,loc[1]+2],
//             [loc[0]-2,loc[1]-1], [loc[0]-2,loc[1]+1],
//             [loc[0]+1,loc[1]-2], [loc[0]+1,loc[1]+2],
//             [loc[0]+2,loc[1]-1], [loc[0]+2,loc[1]+1]
//         );
//     }

//     // movement for pawns
//     if (thisPiece=="WP") {
//         newLocs.push([loc[0]-1,loc[1]]);
//         if (loc[0]==6) newLocs.push([loc[0]-2,loc[1]]);     
//     }

//     // movement for bishops
//     // queen also moves like a bishop
//     if (thisPiece=="WB"||thisPiece=="WQ") {
//         var check = 7;
//         // up left diagonal
//         var ULD = [loc[0]-1,loc[1]-1];
//         while (check>0) {
//             if (b.cell(ULD).get()==null) { newLocs.push(ULD); ULD = [ULD[0]-1,ULD[1]-1]; } 
//             check--;  
//         }
//         check = 7;
//         // up right diagonal
//         var URD = [loc[0]-1,loc[1]+1];
//         while (check>0) {
//             if (b.cell(URD).get()==null) { newLocs.push(URD); URD = [URD[0]-1,URD[1]+1]; } 
//             check--;  
//         }
//         check = 7;
//         // down left diagonal
//         var DLD = [loc[0]+1,loc[1]-1];
//         while (check>0) {
//             if (b.cell(DLD).get()==null) { newLocs.push(DLD); DLD = [DLD[0]+1,DLD[1]-1]; } 
//             check--;  
//         }
//         check = 7;
//         // down right diagonal
//         var DRD = [loc[0]+1,loc[1]+1];
//         while (check>0) {
//             if (b.cell(DRD).get()==null) { newLocs.push(DRD); DRD = [DRD[0]+1,DRD[1]+1]; } 
//             check--;  
//         }
//     }

//     // movement for rooks
//     // queen also moves like a rook
//     if (thisPiece=="WR"||thisPiece=="WQ") {
//         var check = 7;
//         var U = [loc[0]-1,loc[1]];
//         while (check>0) {
//             if (b.cell(U).get()==null) { newLocs.push(U); U = [U[0]-1,U[1]]; } 
//             check--;  
//         }
//         check = 7;
//         // up right diagonal
//         var L = [loc[0],loc[1]-1];
//         while (check>0) {
//             if (b.cell(L).get()==null) { newLocs.push(L); L = [L[0],L[1]-1]; } 
//             check--;  
//         }
//         check = 7;
//         // down left diagonal
//         var R = [loc[0],loc[1]+1];
//         while (check>0) {
//             if (b.cell(R).get()==null) { newLocs.push(R); R = [R[0],R[1]+1]; } 
//             check--;  
//         }
//         check = 7;
//         // down right diagonal
//         var D = [loc[0]+1,loc[1]];
//         while (check>0) {
//             if (b.cell(D).get()==null) { newLocs.push(D); D = [D[0]+1,D[1]]; } 
//             check--;  
//         }
//     }

//     // movement for king
//     if (thisPiece=="WG") {
//         newLocs.push(
//             [loc[0]-1,loc[1]],   [loc[0]+1,loc[1]],
//             [loc[0],loc[1]-1],   [loc[0],loc[1]+1],
//             [loc[0]-1,loc[1]-1], [loc[0]-1,loc[1]+1],
//             [loc[0]+1,loc[1]-1], [loc[0]+1,loc[1]+1]
//         );
//     }

//     // remove illegal moves by checking 
//     // content of b.cell().get()
//     (function removeIllegalMoves(arr) {
//         var fixedLocs = [];
//         for (var i=0; i<arr.length; i++) 
//             if (b.cell(arr[i]).get()==null)
//                 fixedLocs.push(arr[i]); 
//         newLocs = fixedLocs;
//     })(newLocs); 

//     // bind green spaces to movement of piece
//     bindMoveLocs = newLocs.slice();
//     bindMovePiece = piece; 
//     bindMoveEvents(bindMoveLocs);

// }

// // bind move event to new piece locations
// function bindMoveEvents(locs) {
//     for (var i=0; i<locs.length; i++) {
//         b.cell(locs[i]).DOM().classList.add("green");
//         b.cell(locs[i]).on("click", movePiece);  
//     }
// }

// // actually move the piece
// function movePiece() {
//     var userClick = b.cell(this).where();
//     if (bindMoveLocs.indexOf(userClick)) {
//         b.cell(userClick).place(bindMovePiece);
//         resetBoard();
//     }
// }

// // remove previous green spaces and event listeners
// function resetBoard() {
//     for (var r=0; r<b.rows(); r++) {
//         for (var c=0; c<b.cols(); c++) {
//             b.cell([r,c]).DOM().classList.remove("green");
//             b.cell([r,c]).removeOn("click", movePiece);
//         }
//     }
// }