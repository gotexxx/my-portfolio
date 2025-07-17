import Image from "next/image";

export const  ProjectHeader =  ({ title, thumbnail }: { title: string; thumbnail: string }) => {
    return (
        <div className="relative my-16 group">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center pb-10">{title}</h1>
            <Image
                src={thumbnail}
                alt={title}
                width={1200}
                height={700}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl max-h-[600px]"
                priority
            />
        </div>
    );
}
