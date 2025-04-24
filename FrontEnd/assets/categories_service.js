export async function fetchCategories() {
    try {
        const response = await fetch("http://localhost:5678/api/categories");
        if (!response.ok) throw new Error("Erreur lors de la récupération des catégories");
        let categories = await response.json();
        categories.unshift({ id: 0, name: 'Tous' }); // Ajout de la catégorie "Tous"
        return categories;
    } catch (error) {
        console.error(error);
        return [];
    }
}
