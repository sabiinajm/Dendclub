import React from 'react';
import Table from '../components/Table';

const MedicineCard = ({ name, description, price, available }) => {
    return (
        <div className="bg-white rounded-xl h-[375px] w-[256px] relative">
            <div className={`bg-[${available ? '#10B981' : '#FF3B30'}] rounded-tl-xl text-white text-sm p-1 flex justify-center w-[106px]`}>
                {available ? 'Mövcuddur' : 'Tükənib'}
            </div>
            <svg className="absolute top-1 right-1" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path d="M23.25 16.79H16.79V23.25C16.79 23.59 16.66 23.92 16.41 24.16C16.17 24.4 15.84 24.54 15.5 24.54C15.16 24.54 14.83 24.4 14.59 24.16C14.34 23.92 14.21 23.59 14.21 23.25V16.79H7.75C7.41 16.79 7.08 16.65 6.84 16.41C6.59 16.17 6.46 15.84 6.46 15.5C6.46 15.16 6.59 14.83 6.84 14.59C7.08 14.34 7.41 14.21 7.75 14.21H14.21V7.75C14.21 7.41 14.34 7.08 14.59 6.84C14.83 6.59 15.16 6.46 15.5 6.46C15.84 6.46 16.17 6.59 16.41 6.84C16.66 7.08 16.79 7.41 16.79 7.75V14.21H23.25C23.59 14.21 23.92 14.34 24.16 14.59C24.41 14.83 24.54 15.16 24.54 15.5C24.54 15.84 24.41 16.17 24.16 16.41C23.92 16.65 23.59 16.79 23.25 16.79Z" fill="#0D9CD8" />
            </svg>
            <img src="/assets/images/derman.png" alt={name} className="h-[155px] w-[240px] object-contain" />
            <div className="px-2">
                <h2 className="font-medium">{name}</h2>
                <p className="text-sm pt-2">{description}</p>
                <h2 className="font-medium py-2">{price} AZN</h2>
            </div>
            <div className="bg-[#0D9CD8] text-white h-[48px] rounded-xl mx-2 w-[240px] flex justify-center items-center">
                Redakte et
            </div>
        </div>
    );
};

const Medicines = () => {
    const medicines = [
        { name: 'Alora 100 ml şərbət', description: 'Nevrasteniya, Stress simptomları, Yuxusuzluq', price: 10, available: true },
        { name: 'Alora 100 ml şərbət', description: 'Nevrasteniya, Stress simptomları, Yuxusuzluq', price: 10, available: false },
        { name: 'Alora 100 ml şərbət', description: 'Nevrasteniya, Stress simptomları, Yuxusuzluq', price: 10, available: true },
        { name: 'Alora 100 ml şərbət', description: 'Nevrasteniya, Stress simptomları, Yuxusuzluq', price: 10, available: true }
    ];

    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] py-10">
            <div className="grid justify-self-center gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xlll:grid-cols-4">
                {medicines.map((medicine, index) => (
                    <MedicineCard key={index} {...medicine} />
                ))}
            </div>
            <h3 className="py-[30px] font-medium text-xl">Bütün Sifarişlər</h3>
                <input type="text" className="mb-[20px] outline-none w-full lg:w-[520px] h-[48px] pl-3 rounded-xl" placeholder="Axtarın" />
            <Table />
        </div>
    );
};

export default Medicines;
