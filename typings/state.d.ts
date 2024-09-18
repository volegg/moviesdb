type MovieOptionState = {
    genre?: MovieGenre;
};

type MoviePopularState = {
    pending: boolean;
    list: MoviePopular[];
};

type UIState = {
    layoutName: string;
};
