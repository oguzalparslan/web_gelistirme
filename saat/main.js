window.onload = showWorldClock;

function showWorldClock() {
    var today = new Date();
    var hist = today.getHours();
    var mist = today.getMinutes();
    var sist = today.getSeconds();

    hist = checkTime(hist);
    mist = checkTime(mist);
    sist = checkTime(sist);
    document.getElementById('istanbulsaat').innerHTML = hist + ":" + mist + ":" + sist;

    var ny = new Date();
    var hny = ny.getUTCHours() - 4;
    var mny = ny.getUTCMinutes();
    var sny = ny.getUTCSeconds();

    hny = checkTime(hny);
    mny = checkTime(mny);
    sny = checkTime(sny);
    document.getElementById('newyorksaat').innerHTML = hny + ":" + mny + ":" + sny;

    var pekin = new Date();
    var hp;
    if (pekin.getUTCHours() + 8 >= 24) {
        hp = (pekin.getUTCHours() + 8) - 24;
    } else {
        hp = pekin.getUTCHours() + 8;
    }
    var mp = pekin.getUTCMinutes();
    var sp = pekin.getUTCSeconds();

    hp = checkTime(hp);
    mp = checkTime(mp);
    sp = checkTime(sp);
    document.getElementById('pekinsaat').innerHTML = hp + ":" + mp + ":" + sp;
    t = setTimeout('showWorldClock()', 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}