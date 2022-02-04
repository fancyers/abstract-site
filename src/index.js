class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.map(x => x.name).includes(board.name)) {
            throw '동일한 이름의 Board가 존재합니다.'
        }
        board.status = true
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.filter(x => x.name === name)[0]
    }

}


class Board {
    constructor(name) {
        if (name === '' || name === null || !name) {
            throw 'name 데이터가 올바르지 않습니다.'
        }
        this.name = name
        this.articles = []
    }

    publish(article) {
        if (this.status) {
            article.id = `${this.name}-${Math.random()}`
            article.createdDate = new Date().toISOString()
            article.status = true
            this.articles.push(article)
        } else {
            throw '사용 불가능한 Board입니다.'
        }
        
    }

    getAllArticles() {
        return this.articles
    }
    
}


class Article {
    constructor(article) {
        if (!article.subject || !article.content || !article.author) {
            throw 'Article은 subject, content, author 3개의 데이터를 포함해야 합니다.'
        }
        this.article = article
        this.comments = []
    }

    reply(comment) {
        if (this.status) {
            comment.createdDate = new Date().toISOString()
            this.comments.push(comment)
        } else {
            throw '사용 불가능한 Article입니다.'
        }
    }

    getAllComments() {
        return this.comments
    }
}


class Comment {
    constructor(comment) {
        if (!comment.content || !comment.author) {
            throw 'Comment는 content, author 2개의 데이터를 포함해야 합니다.'
        }
        this.comment = comment
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
