let count = 0;

function cc(card) {


    if (card >= 2 && card <= 6) {
        count++;

    } else if (card >= 7 && card <= 9) {

    } else {
        count--;

    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');