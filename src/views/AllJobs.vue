<template>
    <div class="pt-12 px-8 xl:px-32 bgColor">
        <p class="mt-8 text-xl lg:text-3xl font-bold">All Open Jobs</p>
            <div class="all-jobs">
                <JobCard :jobs='jobs' />
            </div>
        </div>
</template>

<script>
import JobCard from '../components/JobCard.vue'
export default {
    data () {
        return {
            jobs: [
                {
                    id: 1, 
                    name: 'Frontend Engineer',

                    location: 'London',

                    time: 'closes 1 April 2022',

                    company: 'Shine Interview',

                    jobOverview: `We are looking for programmers with a keen eye for design for the 
                    position of front end developer. Front end developers are responsible for 
                    ensuring the alignment of web design and user experience requirements, 
                    optimizing web pages for maximum efficiency, and maintaining brand consistency 
                    across all web pages, among other duties.`,

                    companyOverview: 'https://www.youtube.com/embed/ScMzIvxBSi4',

                    contract: '$70,000 per annum',


                    requirement: `Understanding of key design principles.
                    Proficiency in HTML, CSS, JavaScript, and jQuery.
                    Understanding of server-side CSS.
                    Experience with graphic design applications such as Adobe Illustrator.
                    Experience with responsive and adaptive design.
                    Understanding of SEO principles.
                    Good problem-solving skills.
                    Excellent verbal communication skills.` 
                },
                 {
                    id: 2, 
                    name: 'Backend Engineer',

                    location: 'Manchester',

                    time: 'closes 2 April 2022',

                    company: 'Google',

                    jobOverview: `We are looking for an analytical, results-driven back-end developer 
                    who will work with team members to troubleshoot and improve current back-end 
                    applications and processes. The Back-end Developer will use his or her 
                    understanding of programming languages and tools to analyze current codes 
                    and industry developments, formulate more efficient processes, solve problems, 
                    and create a more seamless experience for users`,

                    companyOverview: 'https://www.youtube.com/embed/9xwazD5SyVg',

                    contract: '$90,000 per annum',
                   
                    requirement: `Bachelor degree in computer programming, computer science, or a related field.
                    More education or experience may be required.
                    Fluency or understanding of specific languages, such as Java, PHP, or Python, and operating systems may be required.
                    Strong understanding of the web development cycle and programming techniques and tools.
                    Focus on efficiency, user experience, and process improvement.` 
                },
                 {
                    id: 3, 
                    name: 'DevOps Engineer',

                    location: 'Newcastle',

                    time: 'closes 3 April 2022',

                    company: 'Apple',

                    jobOverview: `We are searching for a decisive and insightful DevOps engineer 
                    to join our reputable company. The DevOps engineer will be involved in various 
                    stages of each product's lifespan and should remain abreast of technological 
                    advancements to promote efficiency. You should also keep track of customer 
                    reviews to enhance marketability.`,

                    companyOverview: 'https://www.youtube.com/embed/TGbUpEJ1z-k',

                    contract: '$110,000 per annum',

                    requirement: `Degree in computer science, software engineering, or an adjacent field.
                    Prior experience at all phases of the software product life cycle, from conception to extinction.
                    Experience using an array of automation tools.
                    Familiarity with software security methods.
                    Demonstrated experience using a wide variety of coding languages.` 
                },
                {
                    id: 4, 
                    name: 'Product Designer',

                    location: 'Hertfordshire',

                    time: 'closes 4 April 2022',

                    company: 'Meta',

                    jobOverview: `We are searching for a passionate product designer to join our team and 
                    develop various new products for customers. They will work alongside a team of engineers 
                    and other professionals to design products to specifications and deliver them on time. 
                    The Product Designer's responsibilities include doing thorough market research to 
                    determine customer needs and preferences`,

                    companyOverview: 'https://www.youtube.com/embed/TGbUpEJ1z-k',

                    contract: '$150,000 per annum',

                    requirement: `Conducting market research to determine gaps in the market.
                    Translating research into feasible ideas and designs that will satisfy consumers.
                    Collaborating with the design team, and providing helpful feedback on processes.
                    Engaging audiences and using sketches, blueprints, and prototypes to gather feedback.
                    Using 3D modeling software for detailed designs.
                    Producing prototypes and models to test functionality.` 
                },
                {
                    id: 5, 
                    name: 'QA Engineer',

                    location: 'Leeds',

                    time: 'closes 5 April 2022',

                    company: 'Amazon',

                    jobOverview: `We are looking for a Quality Assurance (QA) engineer who will manage 
                    exploratory and automated tests to ensure product quality. You will design and 
                    implement tests٫ debug and define corrective actions٫ review system requirements 
                    and track quality assurance metrics (e.g. defect densities and open defect counts).`,

                    companyOverview: 'https://www.youtube.com/embed/D0UnqGm_miA',

                    contract: '$180,000 per annum',

                    requirement: `Work with software developers and project support teams identify business requirements plan projects. Monitor applications and software systems
                    Carry out stress testing, performance testing, functional testing and scalability testing
                    Write and execute test scripts. Run manual and automated tests. Test in different environments including web and mobile
                    Write bug reports. Carry out resource planning. Rreview documentation and work towards departmental and project deadlines` 
                }
            ]
        }
    },
    components: {
        JobCard
    }
}
</script>

<style>
.bgColor {
    background-color: #e1e3e6;
    height: 100vh;
}
.all-jobs {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #e1e3e6;
    overflow-y: auto;
    height: 400px;
}
.all-jobs::-webkit-scrollbar {
  width: 0.8em;
}
.all-jobs::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.all-jobs::-webkit-scrollbar-thumb {
  background-color: #ff7e00;
  outline: 1px solid #e1e3e6;
}

@media screen and (max-width: 720px) {
    .all-jobs {
        height: 600px;
        padding-bottom: 50px;
    }
    .bgColor {
        height: fit-content;
        padding-bottom: 50px;
    }
}
</style>