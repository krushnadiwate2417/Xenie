import Image from "next/image"

const offerings : string[] = [
    "E-Way Bill","14 Days Free Trial","Current account tracking","Inventory tracking", "Android and iOS mobile use","Cash & Bank Reconcillation",
    "E-Invoice","Order tracking","Collection and payment tracking","Customer check entry","View stocks at party & product level","Expense management",
    "Issue purchase / sales invoice","Editing a self-employment reciept","Cash and bank transaction tracking","Customized invoice template","Scan Barcode & create invoices","IMEI and serial no. addition"
]

export default function OfferingCard(){
    return <>
        <div className="w-fit bg-white grid gap-8 justify-items-center justify-self-center rounded-4xl px-44 py-10">
            <div className="text-3xl font-bold">
                Our offerings for all the above plans
            </div>

            <div className="grid grid-cols-3 grid-rows-6 gap-x-12 gap-y-3.5 text-[15px]">
                {offerings.map(vals => (
                <div key={vals} className="flex gap-2.5">
                   <Image
                    src="/images/check.svg"
                    alt="check"
                    width={25}
                    height={25}
                   /> {vals}</div>
                ))}
            </div>

            <div className="text-sm text-neutral-500 text-center max-w-2xl">
                Voice-enabled GST invoicing, e-way bills, inventory tracking, order & payment monitoring,
                expense management, customized templates, and barcode scanning.
            </div>
        </div>
    </>
}