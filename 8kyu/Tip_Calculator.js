function calculateTip(amount, rating) {
rating = rating.charAt(0).toUpperCase() + rating.slice(1).toLowerCase();
    switch (rating) {
        case "Terrible":
            return 0;
            break;
            case "Poor":
            return Math.ceil(amount * 0.05);
            break;
            case "Good":
            return Math.ceil(amount * 0.1) ;
            break;
            case "Great":
            return Math.ceil(amount * 0.15);
            break;
            case "Excellent":
            return Math.ceil(amount * 0.2);
            break;
            default:
                return "Rating not recognised";
    }
}

console.log(calculateTip(24, "GREAT"));