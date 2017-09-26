import React from 'react';
// import ImageLoader from '../../components/ImageLoader/ImageLoader';
import ProfilePic from '../../assets/resume/profile.jpg';
import ResumePDF from '../../assets/resume/resume.pdf';
import './Resume.css';

const Resume = () => (	
	<div className="resume padded-top">

		<div className="resume-container padded-width">
			<div className="resume-section" id="Header">
				<div className="left-col"></div>
				<div className="right-col">
					<div className="center">
						<p className="monospace uppercase">hello@kimispencer.com</p>
						<p className="monospace uppercase">Brooklyn, NY</p>
						<a className="underline" href={`http://kimispencer.com/${ResumePDF}`} target="_blank"><p className="monospace uppercase">Download Resume</p></a>
						<img alt="profile" className="circle-img profile-pic" src={ProfilePic} />
						{/*<ImageLoader className="circle-img profile-pic" src="profile.jpg" imgKey="resume" isBg={false} alt="Profile Pic" />*/}
					</div>
				</div>
			</div>
			<div className="resume-section" id="Profile">
				<div className="left-col">
					<h4 className="bold title underline">PROFILE</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<p>Hi, I’m Kimi!<br/><br/>I’m a front-end engineer, and user experience + product designer based in NYC. 
							I have over 9 years expertise working in interactive technology. From San Francisco startups to NYC digital agencies; spanning industries from interactive advertising,  online magazines/publications, AR games for museum eduction, to high-end fashion. 
							I create digital identity and experiences through concept development, UX & visual design, and creative coding solutions. I also like creating data visualizations, and visuals for live performances/music.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="resume-section" id="WorkExperience">
				<div className="left-col">
					<h4 className="bold title underline">WORK EXPERIENCE</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<div className="flex-col institution">
								<h4 className="bold uppercase">the arrivals</h4>
								<h4 className="bold uppercase">onomie</h4>
								<h4 className="bold uppercase">brainchild.co</h4>
							</div>
							<p className="job-title monospace attribute">Lead Front-end Engineer & UX Designer — 2014 to present</p>
						</div>
						<p>Brainchild.co is a collection of engineers, operators and designers working on projects spanning from fashion, beauty to health care.</p>
						<br />
						<p>Lead front-end engineer and interaction designer for the <a href="http://thearrivals.com" target="_blank">The Arrivals</a>, <a href="http://onomie.com" target="_blank">Onomie</a>, and <a href="http://brainchild.co" target="_blank">Brainchild.co</a> brand sites since launch. Individually responsible for the creation and implementation of all front-end code and interface design for each brand’s respective responsive, cross-platform e-commerce web app. As well as designing and developling monthly interactive campaigns, supporting multiple product launches, and improving the site interface based on A/B studies.</p>
						<br />
						<ul>
							<li><p>&bull; Co-led conversion of <a href="http://thearrivals.com" target="_blank">thearrivals.com</a> into a ReactJS application.</p></li>
							<li><p>&bull; Led the implementation of HTML5, CSS3, client-side Javascript, CSS pre-processing platforms (LESS/SASS), JS task-runners, Git version control.</p></li>
							<li><p>&bull; Created UX/UI mockups, graphic/web designs, as well as translated mockups into code.</p></li>
							<li><p>&bull; Assisted with back-end integration and templating.</p></li>
							<li><p>&bull; Oversaw the launch of multiple successful sites from start to finish under strict deadlines.</p></li>
						</ul>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">suited magazine</h4>
							<p className="job-title monospace">Lead Full-stack Engineer & Digital Designer - 2016 to 2017</p>
						</div>
						<p><a href="http://suitedmagazine.com" target="_blank">SUITED</a> is a biannual fashion and art publication with a singular mission in mind: to celebrate those who have found what they are well-suited for. Their objective is to showcase independent thinkers passionate about creating work that is at once inspired, influential, and timeless.</p>
						<br />
						<p>Full-stack engineer and UX designer for SUITED Magazine; created a customized CMS driven template design built on top of the Squarespace developer platform. Worked one-on-one with the creative director to translate the print publication into a branded online experience; built visual mockups and interface designs.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">bolster</h4>
							<p className="job-title monospace">Front-end Developer & Product Designer - 2013 to 2014</p>
						</div>
						<p><a href="http://bolster.us" target="_blank">Bolster.us</a> is a web application for home owners & contractors to connect and manage home remodeling projects.<br/><br/>Designed and developed a user-facing public website as well as an admin site for users to log in, find their match, upload/share documents & monitor their project's progression. Built with AngularJS v1.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">10x management</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p><a href="https://www.10xmanagement.com/" target="_blank">10x Management</a> was born from a simple premise: "Find the best contract tech talent and match them with the world's most amazing companies." That was the concept in 2011, when two successful talent managers from the music industry teamed up with a brilliant software engineer to create the world’s first tech talent agency. 10x helps match the best contract tech talent with ground-breaking companies, with new talent and companies joining our community every day.<br/><br/>A member of 10x's first class of tech talent in 2012. Freelance UX designer and front-end developer.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">+plusign</h4>
							<p className="job-title monospace">UX Designer & Front-end Developer - 2012 to 2013</p>
						</div>
						<p> <a href="http://plusign.com" target="_blank">+plusign</a> is an award-winning creative studio that does branding, digital, and design.<br/><br/>UX designer and front-end web developer for multiple client projects spanning real-estate, beauty, and the arts.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">r/ga</h4>
							<p className="job-title monospace">Experience Design Intern - 2011</p>
						</div>
						<p><a href="http://rga.com" target="_blank">RGA.com</a> is a full service digital agency in the connected age.<br/><br/>Developed detailed wireframes and collaborated in the redesign of Verizon Wireless in-store touch screen experiences. Designed and rapidly prototyped a mobile application for MasterCard’s and the High Line Park of NYC’s Priceless Cities campaign. Created user journeys, as well as filmed and edited corresponding concept videos. Participated in the R/GA Data Visualization Incubator. Mined, analyzed and programmed a series of information graphics of Verizon’s service networks for the creative team to better understand customer flows and touch points of the Verizon brand experience.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">guide by cell</h4>
							<p className="job-title monospace">Project Manager & Web/Graphic Designer - 2008 to 2010</p>
						</div>
						<p><a href="http://guidebycell.com/" target="_blank">Guide by Cell</a> develops mobile engagement solutions to support audiotours, games and other location based interactions for museums and other cultural institutions.<br/><br/>Designed, user tested, and launched interactive mobile applications and media content for over 300 museums and exhibitions. Participated in the development of <a href="http://www.ghostsofachance.com/" target="_blank">Ghosts of a Chance</a> the first Augmented Reality Game (ARG) played at the Smithsonian Museum of American Art. Created wireframes, developed mobile games and location-based narratives.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Education">
				<div className="left-col">
					<h4 className="bold title underline">EDUCATION</h4>
				</div>
				<div className="right-col">
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">nyu, tisch school of the arts</h4>
							<p className="monospace">M.P.S - Interactive Technology & Design</p>
						</div>
						<p>ITP is a two-year graduate program located in the Tisch School of the Arts whose mission is to explore the imaginative use of communications technologies — how they might augment, improve, and bring delight and art into people's lives.</p>
					</div>
					<div className="resume-section-item">
						<div className="flex-row responsive title">
							<h4 className="bold uppercase institution">uc berkeley</h4>
							<p className="monospace">B.A. - Political Science, Minor - Middle Eastern Studies</p>
						</div>
						<p>Politial Science major with a focus on the use of emergent, mobile technologies in the advancement of democractic movements. Conducted reserarch on the use of cellular devices in the Arab world as a conduit for democractic expression, and dissent against theocractic or autocratic governments.</p>
					</div>
				</div>
			</div>
			<div className="resume-section" id="Skills">
				<div className="left-col">
					<h4 className="bold title underline">TECHNICAL EXPERTISE</h4>
				</div>
				<div className="right-col">
					<div className="flex-row responsive">
						<div className="flex-col resume-section-item" id="Skillset">
							<h4 className="title bold uppercase">professional skillset</h4>
							<div className="flex-row">
								<ul>
									<li>HTML5</li>
									<li>CSS3/SASS/LESS</li>
									<li>Javascript/ES6</li>
									<li>Webpack</li>
									<li>Git</li>
									<li>UX Design</li>
								</ul>
								<ul>
									<li>Javascript frameworks (ReactJS, AngularJS)</li>
									<li>Python</li>
									<li>PHP</li>
									<li>Processing/Java</li>
									<li>Wordpress, Squarespace</li>
									<li>Data Visualization</li>
								</ul>
							</div>
						</div>
						<div className="flex-col resume-section-item third-span" id="Tools">
							<h4 className="title bold uppercase">tools</h4>
							<ul>
								<li>Sublime</li>
								<li>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere)</li>
								<li>Sketch</li>
								<li>VDMX</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Resume;