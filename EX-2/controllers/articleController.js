import { articles } from "../models/data.js"; 

const getAllArticles =  (req, res) => {  
    res.status(200).json({
        status: "success",
        results: articles.length,
        data: {
            articles
        }
    });
}
const getArticleById =  (req, res) => {
    const article = articles.find(article => article.id === parseInt(req.params.id));

    if (!article) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }
    res.status(200).json({
        status: "success",
        data: { article }
    });
}
const createArticle =  (req, res) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    articles.push(newArticle);
    res.status(201).json({
        status: "success",
        data: { article: newArticle}
    });
}
const updateArticle = (req, res) => {
    const articleId = articles.find(article => article.id === parseInt(req.params.id));
    if (!articleId) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }
    const updatedArticle = {
        ...articleId,
        title: req.body.title,
        content: req.body.content
    };
    articles[articles.indexOf(articleId)] = updatedArticle;
    res.status(200).json({
        status: "success",
        data: { article: updatedArticle }
    });
}
const deleteArticle =  (req, res) => {
    const articleId = articles.find(article => article.id === parseInt(req.params.id));
    if (!articleId) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }
    articles.splice(articles.indexOf(articleId), 1);
    res.status(204).json({
        status: "success",
        data: null
    });
}   
export {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};
