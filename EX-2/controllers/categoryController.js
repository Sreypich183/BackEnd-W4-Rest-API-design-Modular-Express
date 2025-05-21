import { categories } from "../models/data.js";

const getAllCategories = (req, res) => {
    res.status(200).json({
        status: "success",
        results: categories.length,
        data: {
            categories
        }
    });
}

const getCategoryById = (req, res) => {
    const category = categories.find(category => category.id === parseInt(req.params.id));

    if (!category) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }
    res.status(200).json({
        status: "success",
        data: { category }
    });
}

const createCategory = (req, res) => {
    const newCategory = {
        id: categories.length + 1,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json({
        status: "success",
        data: { category: newCategory }
    });
}
 const updateCategory = (req, res) => {
    const categoryId = categories.find(category => category.id === parseInt(req.params.id));
    if (!categoryId) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }
    const updatedCategory = {
        ...categoryId,
        name: req.body.name
    };
    categories[categories.indexOf(categoryId)] = updatedCategory;
    res.status(200).json({
        status: "success",
        data: { category: updatedCategory }
    });
}
const deleteCategory = (req, res) => {
    const categoryId = categories.find(category => category.id === parseInt(req.params.id));
    if (!categoryId) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }
    categories.splice(categories.indexOf(categoryId), 1);
    res.status(204).json({
        status: "success",
        data: null
    });
}
export {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory, 
    deleteCategory
};