// movie status based in rating 

class Solution {
    get_movie_status(ratingStr) {
        let rating = parseFloat(ratingStr);

        if (rating >= 0.0 && rating <= 2.0) return "Flop";
        if (rating <= 3.4) return "Semi-hit";
        if (rating <= 4.5) return "Hit";
        if (rating <= 5.0) return "Super Hit";
    }
}

module.exports = Solution;
