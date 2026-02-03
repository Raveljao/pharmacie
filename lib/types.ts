export interface Product {
    id: string;
    nom: string;
    nom_mg: string;
    prix: number;
    categorie: string;
    disponible: boolean;
    ordonnance_requise: boolean;
    description: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CustomerInfo {
    name: string;
    phone: string;
    neighborhood: string;
    address: string;
    deliveryMethod: 'click-collect' | 'delivery';
    paymentMethod: 'on-site' | 'mvola' | 'orange' | 'airtel' | 'cash';
}
