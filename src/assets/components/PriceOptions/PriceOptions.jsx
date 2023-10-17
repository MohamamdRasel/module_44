import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions =[

 
 
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Unlimited access during off-peak hours",
              "Locker room access",
              "Personalized workout plan",
              "Fitness assessment",
              "Discount on personal training sessions"
            ],
            "price": 29.99 
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to all gym equipment",
              "Unlimited 24/7 access",
              "Locker room and sauna access",
              "Free fitness classes",
              "Personalized nutrition plan",
              "Complimentary personal training session",
              "Access to members-only events"
            ],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Access for 2 adults and 2 children",
              "Access to all gym equipment",
              "Unlimited 24/7 access",
              "Locker room and sauna access",
              "Discounted fitness classes for family members",
              "Family fitness workshops",
              "Access to childcare services"
            ],
            "price": 79.99
          },
          {
            "id": 4,
            "name": "Student Membership",
            "features": [
              "Access to cardio equipment",
              "Unlimited access during off-peak hours",
              "Locker room access",
              "Student ID required",
              "Monthly fitness challenges",
              "Discounts at partner businesses",
              "Access to student study area"
            ],
            "price": 24.99
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid grid-cols-3 gap-6">
              {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;