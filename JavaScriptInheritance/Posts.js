function solve() {
    class Post {

        constructor(postTitle, postContent) {
            this.title = postTitle;
            this.content = postContent;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {

        constructor(postTitle, postContent, likes, dislikes) {
            super(postTitle, postContent);

            this.postLikes = likes;
            this.postDislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString();
            result += `\nRating: ${this.postLikes - this.postDislikes}`;

            if (this.comments.length) {
                result += '\nComments:';

                for (let comment of this.comments) {
                    result += '\n * ' + comment;
                }
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(postTitle, postContent, postViews) {
            super(postTitle, postContent);

            this.postViews = postViews;
        }

        view() {
            ++this.postViews;

            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.postViews}`;
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}