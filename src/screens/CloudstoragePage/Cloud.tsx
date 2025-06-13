import FeaturePage from "../SharedFeaturePage/FeaturePage";

const Collaboration = () => {
    return (
        <FeaturePage
            title="Features You Get"
            imageSrc="/cloud storage.jpg"
            imageAlt="cloud storage"
            activeTab="cloud"
            navigateTo={{
                collaboration: "/collaboration",
                cloud: "/cloud",
                employee: "/employee-management",
            }}
        >
            <p>
                Our cloud storage solutions offer secure, scalable, and reliable access to your data—anytime, anywhere. Designed for flexibility and performance, our cloud infrastructure ensures seamless data management, automatic backups, and real-time synchronization across devices.
            </p>
            <p>
                Whether you're a growing business or an individual user, our storage systems are built to protect your critical information with advanced encryption, user-level access controls, and 24/7 availability. Easily store, share, and collaborate on files without worrying about physical limitations or security threats.
            </p>
            <p>Empower your workflow with cloud storage that grows with you.</p>
        </FeaturePage>
    );
};

export default Collaboration;
