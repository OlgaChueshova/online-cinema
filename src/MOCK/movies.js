const generateMovies = (gty) => {
    return new Array(gty).fill(null).map((_, index) => ({
        id: index,
        title: `Movie ${index}`,
        rating: Math.ceil(Math.random(index)*5),
        poster: `movie${index + 1}.jpg`,
        comments: [
            {
                title: "Comment 1",
                comment: "Lorem input"
            },
        ]
    }))
}

export const MOVIES = generateMovies(18);