import FeaturePage from "../SharedFeaturePage/FeaturePage";

const Collaboration = () => {
    return (
        <FeaturePage
            title="Features You Get"
            imageSrc="/employee management.jpg"
            imageAlt="employee management"
            activeTab="employee"
            navigateTo={{
                collaboration: "/collaboration",
                cloud: "/cloud",
                employee: "/employee-management",
            }}
        >
            <p>
                Our employee management system is designed to streamline workforce operations and foster a productive, motivated, and well-connected team. From onboarding and attendance tracking to performance evaluations and payroll integration, we provide a centralized platform to manage every aspect of the employee lifecycle.
            </p>
            <p>
                With intuitive tools and real-time analytics, managers can make informed decisions while employees enjoy transparency, efficient communication, and seamless access to their work-related information.
            </p>
            <p>We believe that empowering employees begins with effective management — and our solutions are built to support growth, engagement, and organizational success.</p>
        </FeaturePage>
    );
};

export default Collaboration;
