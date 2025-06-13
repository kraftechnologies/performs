import FeaturePage from "../SharedFeaturePage/FeaturePage";

const Collaboration = () => {
    return (
        <FeaturePage
            title="Features You Get"
            imageSrc="/collaboration.jpg"
            imageAlt="Collaboration Team"
            activeTab="collaboration"
            navigateTo={{
                collaboration: "/collaboration",
                cloud: "/cloud",
                employee: "/employee-management",
            }}
        >
            <p>
                At the heart of our success is our dedicated Collaboration Team — a dynamic group of professionals who believe in the power of unity, innovation, and shared vision. With diverse expertise across various domains, our team thrives on open communication, mutual respect, and a collaborative spirit that transforms ideas into impactful results.
            </p>
            <p>
                We foster an environment where every voice is heard, creativity is encouraged, and challenges are tackled together. Whether working across departments or partnering with clients and stakeholders, our team is committed to building strong relationships and delivering excellence through synergy and teamwork.
            </p>
            <p>Together, we don’t just work — we co-create, innovate, and grow.</p>
        </FeaturePage>
    );
};

export default Collaboration;
