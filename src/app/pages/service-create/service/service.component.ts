// done by Shreya Khisa 2018
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../shared/services/auth.service'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  graphics: boolean = false;
  fun: boolean = false;
  digital: boolean = false;
  business: boolean = false;
  programming: boolean = false;
  writing: boolean = false;
  music: boolean = false;
  video: boolean = false;
  dragAreaClass:any;
  file:any;
  task: AngularFireUploadTask;
  loggedInUser: any;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  public serviceCollection: AngularFirestoreCollection<any>;
  serviceObservable: Observable<any[]>;
  serviceId: any;
  serviceForm: FormGroup;
  times: string[] = ['Upto 24 hours', 'Upto 3 days', 'Upto 7 days', 'Any'];
  returnUrl;
  categoryTypes: string[];
  url: string;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    public authService: AuthService

  ) {

  }


  ngOnInit() {
    window.scrollTo(0, 0);



    // initialize the first form
    this.serviceForm = this.fb.group({
      'name': ['', [
        Validators.required,
        Validators.minLength(4),]],
      'serviceDescription': ['', [
        Validators.required,
        Validators.minLength(6),]],
      'categories': ['', [Validators.required]],
      'categoryTypes': ['', [Validators.required]],
      'image': [''],
      'serviceId': [''],
      'url': [''],
      'basicCost': ['', [Validators.required]],
      'basicDeliveryTime': ['',[Validators.required]],
      'basicDescription': ['',[Validators.required]],
      'standardCost': [''],
      'standardDeliveryTime': [''],
      'standardDescription': [''],
      'premiumCost': [''],
      'premiumDeliveryTime': [''],
      'premiumDescription': [''],
      'email': [''],
      'sellerName':[''],
      'sellerPhoto':[''],
      'uid':['']

    });

  }

  onSubmit(form: any) {
    form.serviceId = this.createId();
    const collectionRef = this.afs.collection("serviceInfo");
    collectionRef.doc(form.serviceId).set(form, { merge: true });
    alert('Thanks for creating service.');
    this.router.navigate(['/services']);
  }
  createId() {
    return this.afs.createId();
  }

  // get method for every input type
  get name() { return this.serviceForm.get('name'); }
  get sellerName() { return this.serviceForm.get('sellerName'); }
  get sellerPhoto() { return this.serviceForm.get('sellerPhoto'); }
  get email() { return this.serviceForm.get('email'); }
  get uid() { return this.serviceForm.get('uid'); }
  get image() { return this.serviceForm.get('image'); }
  get serviceDescription() { return this.serviceForm.get('serviceDescription'); }
  get basicDeliveryTime() { return this.serviceForm.get('basicDeliveryTime'); }
  get basicCost() { return this.serviceForm.get('basicCost'); }
  get basicDescription() { return this.serviceForm.get('basicDescription'); }
  get standardCost() { return this.serviceForm.get('standardCost'); }
  get standardDescription() { return this.serviceForm.get('standardDescription'); }
  get standardDeliveryTime() { return this.serviceForm.get('standardDeliveryTime'); }
  get premiumDescription() { return this.serviceForm.get('premiumDescription'); }
  get premiumCost() { return this.serviceForm.get('premiumCost'); }
  get premiumDeliveryTime() { return this.serviceForm.get('premiumDeliveryTime'); }



  secondDropDownChanged(event: any) {
    console.log(event);
    const val = event.target.value;
    console.log(val);
    if (val == "User Testing") {
      this.url = "testing";
      console.log(this.url);
    }
    if (val == "SEO") {
      this.url = "seo";
      console.log(this.url);
    }
    if (val == "Logo Design") {
      this.url = "logo-design";
      console.log(this.url);
    }
    if (val == "Flyers & Brochures") {
      this.url = "flyers";
      console.log(this.url);
    }
    if (val == "Packaging Design") {
      this.url = "packaging-design";
      console.log(this.url);
    }
    if (val == "Book & Album Covers") {
      this.url = "books-albums";
      console.log(this.url);
    }

    if (val == "Business Cards & Stationary") {
      this.url = "business-card";
      console.log(this.url);
    }
    if (val == "Web & Mobile Design") {
      this.url = "web-mobile";
      console.log(this.url);
    }
    if (val == "Presentation Design") {
      this.url = "presentation";
      console.log(this.url);
    }
    if (val == "Infographics") {
      this.url = "infographics";
      console.log(this.url);
    }
    if (val == "Cartoons & Caricatures") {
      this.url = "cartoon";
      console.log(this.url);
    }
    if (val == "3D & 2D Models") {
      this.url = "3d-2d-models";
      console.log(this.url);
    }
    if (val == "Tshirts & Merchandise") {
      this.url = "tshirts-merchandise";
      console.log(this.url);
    }
    if (val == "Photoshop & Editing") {
      this.url = "photoshop";
      console.log(this.url);
    }
    if (val == "Banner Ads") {
      this.url = "banner";
      console.log(this.url);
    }
    if (val == "Social Media Design") {
      this.url = "social-media";
      console.log(this.url);
    }
    if (val == "Vector Tracing") {
      this.url = "vector";
      console.log(this.url);
    }
    if (val == "Invitations") {
      this.url = "invitation";
      console.log(this.url);
    }
    if (val == "Social Media Marketing") {
      this.url = "social-media-marketing";
      console.log(this.url);
    }
    if (val == "Email Marketing") {
      this.url = "email-marketing";
      console.log(this.url);
    }
    if (val == "Content Marketing") {
      this.url = "content-marketing";
      console.log(this.url);
    }
    if (val == "Video Marketing") {
      this.url = "video-marketing";
      console.log(this.url);
    }
    if (val == "Web Analytics") {
      this.url = "web-anlytics";
      console.log(this.url);
    }
    if (val == "Local Listings") {
      this.url = "local-listings";
      console.log(this.url);
    }

    if (val == "Domain Research") {
      this.url = "domain-research";
      console.log(this.url);
    }

    if (val == "Search & Display Marketing") {
      this.url = "serach-display";
      console.log(this.url);
    }
    if (val == "Marketing Strategy") {
      this.url = "marketing-strategy";
      console.log(this.url);
    }
    if (val == "Influencer Marketing") {
      this.url = "influencer-marketing";
      console.log(this.url);
    }
    if (val == "Web Traffic") {
      this.url = "web-traffic";
      console.log(this.url);
    }
    if (val == "Mobile Advertising") {
      this.url = "mobile-advertising";
      console.log(this.url);
    }
    if (val == "Music Promotion") {
      this.url = "music-promotion";
      console.log(this.url);
    }
    if (val == "Articles & Blog Posts") {
      this.url = "articles-blog";
      console.log(this.url);
    }
    if (val == "Business Copywriting") {
      this.url = "business-copywriting";
      console.log(this.url);
    }
    if (val == "Resumes & Cover Letters") {
      this.url = "resumes-covers";
      console.log(this.url);
    }
    if (val == "Research & Summeries") {
      this.url = "research";
      console.log(this.url);
    }
    if (val == "Translation") {
      this.url = "translation";
      console.log(this.url);
    }
    if (val == "Creative Writing") {
      this.url = "creative-writing";
      console.log(this.url);
    }
    if (val == "ProofReading & Editing") {
      this.url = "proofReading-editing";
      console.log(this.url);
    }
    if (val == "Press Releases") {
      this.url = "press-releases";
      console.log(this.url);
    }
    if (val == "Transciption") {
      this.url = "transcription";
      console.log(this.url);
    }
    if (val == "Legal Writing") {
      this.url = "legal-writing";
      console.log(this.url);
    }
    if (val == "Whiteboard & Animated Explainers") {
      this.url = "whiteboard-animated";
      console.log(this.url);
    }
    if (val == "Intros & Animated Logos") {
      this.url = "intros-logos";
      console.log(this.url);
    }
    if (val == "Promotional Videos") {
      this.url = "promotional-videos";
      console.log(this.url);
    }
    if (val == "Live Action Explainers") {
      this.url = "live-action";
      console.log(this.url);
    }
    if (val == "Short Video Ads") {
      this.url = "short-video";
      console.log(this.url);
    }
    if (val == "Spokesperson Videos") {
      this.url = "spokesperson-video";
      console.log(this.url);
    }
    if (val == "Editing & Post Production") {
      this.url = "editing-production";
      console.log(this.url);
    }
    if (val == "Lyrics & Music Videos") {
      this.url = "lyric-video";
      console.log(this.url);
    }
    if (val == "Animated Characters & Modelling") {
      this.url = "animated-modelling";
      console.log(this.url);
    }
    if (val == "Voice Over") {
      this.url = "voice-over";
      console.log(this.url);
    }
    if (val == "Mixing & Mastering") {
      this.url = "mixing-mastering";
      console.log(this.url);
    }
    if (val == "Producers & Composers") {
      this.url = "producers-composers";
      console.log(this.url);
    }
    if (val == "Singer & Songwriters") {
      this.url = "singer-songwriter";
      console.log(this.url);
    }
    if (val == "Session Musicians & Singers") {
      this.url = "musician-singer";
      console.log(this.url);
    }
    if (val == "Sound Effects") {
      this.url = "sound-effects";
      console.log(this.url);
    }
    if (val == "Jingles & Drops") {
      this.url = "jingles-drops";
      console.log(this.url);
    }
    if (val == "WordPress") {
      this.url = "wordpress";
      console.log(this.url);
    }
    if (val == "Web Programming") {
      this.url = "web-programming";
      console.log(this.url);
    }
    if (val == "Ecommerce") {
      this.url = "ecommerce";
      console.log(this.url);
    }
    if (val == "Mobile Apps & Web") {
      this.url = "apps-web";
      console.log(this.url);
    }
    if (val == "Website Builders & CMS") {
      this.url = "website-builders";
      console.log(this.url);
    }
    if (val == "Desktop Applications") {
      this.url = "desktop-applications";
      console.log(this.url);
    }
    if (val == "Data Analysis & Reports") {
      this.url = "data-analysis";
      console.log(this.url);
    }
    if (val == "Convert Files") {
      this.url = "convert-files";
      console.log(this.url);
    }
    if (val == "Support & IT") {
      this.url = "support-it";
      console.log(this.url);
    }
    if (val == "Chatbots") {
      this.url = "chatbots";
      console.log(this.url);
    }

    if (val == "Databases") {
      this.url = "databases";
      console.log(this.url);
    }
    if (val == "QA") {
      this.url = "qa";
      console.log(this.url);
    }

    if (val == "Virtual Assistant") {
      this.url = "virtual-assistant";
      console.log(this.url);
    }
    if (val == "Market Research") {
      this.url = "market-research";
      console.log(this.url);
    }
    if (val == "Business Plans") {
      this.url = "business-plans";
      console.log(this.url);
    }
    if (val == "Branding Services") {
      this.url = "branding-services";
      console.log(this.url);
    }
    if (val == "Legal Consulting") {
      this.url = "legal-consulting";
      console.log(this.url);
    }
    if (val == "Business Tips") {
      this.url = "business-tips";
      console.log(this.url);
    }
    if (val == "Presentations") {
      this.url = "presentations";
      console.log(this.url);
    }
    if (val == "Career Advice") {
      this.url = "career-advice";
      console.log(this.url);
    }
    if (val == "Flyer Distribution") {
      this.url = "flyer-distribution";
      console.log(this.url);
    }
    if (val == "Online Lessions") {
      this.url = "online-lessions";
      console.log(this.url);
    }
    if (val == "Arts & Crafts") {
      this.url = "arts-crafts";
      console.log(this.url);
    }
    if (val == "Relationship Advice") {
      this.url = "relationship-advice";
      console.log(this.url);
    }
    if (val == "Health,Nutrition & Fitness") {
      this.url = "health-nutrition";
      console.log(this.url);
    }
    if (val == "Astrology & Readings") {
      this.url = "astrology-readings";
      console.log(this.url);
    }
    if (val == "Spiritual & Healing") {
      this.url = "spiritual-healing";
      console.log(this.url);
    }
    if (val == "Family & Genealogy") {
      this.url = "family-genealogy";
      console.log(this.url);
    }
    if (val == "Collectibles") {
      this.url = "collectibles";
      console.log(this.url);
    }
    if (val == "Greeting Cards & Videos") {
      this.url = "greetings-videos";
      console.log(this.url);
    }
    if (val == "Your Message On...") {
      this.url = "your-message";
      console.log(this.url);
    }
    if (val == "Viral Videos") {
      this.url = "viral-videos";
      console.log(this.url);
    }
    if (val == "Pranks & Stunts") {
      this.url = "pranks-stunts";
      console.log(this.url);
    }
    if (val == "Celebrity Impersonators") {
      this.url = "celebrity";
      console.log(this.url);
    }
    if (val == "Gaming") {
      this.url = "gaming";
      console.log(this.url);
    }
    if (val == "Global Culture") {
      this.url = "global-culture";
      console.log(this.url);
    }

  }


  // this will select the sevice category types
  firstDropDownChanged(event: any) {
    console.log(event);
    const val = event.target.value;
    switch (val) {
      case "graphics":
        this.graphics = true;
        this.digital = false;
        this.fun = false;
        this.programming = false;
        this.music = false;
        this.video = false;
        this.writing = false;
        this.business = false;
        break;
      case "digital":
        this.graphics = false;
        this.digital = true;
        this.fun = false;
        this.programming = false;
        this.music = false;
        this.video = false;
        this.writing = false;
        this.business = false;
        break;
      case "fun":
        this.graphics = false;
        this.digital = false;
        this.fun = true;
        this.programming = false;
        this.music = false;
        this.video = false;
        this.writing = false;
        this.business = false;
        break;
      case "business":
        this.graphics = false;
        this.digital = false;
        this.fun = false;
        this.programming = false;
        this.music = false;
        this.video = false;
        this.writing = false;
        this.business = true;
        break;
      case "music":
        this.graphics = false;
        this.digital = false;
        this.fun = false;
        this.programming = false;
        this.music = true;
        this.video = false;
        this.writing = false;
        this.business = false;
        break;
      case "video":
        this.graphics = false;
        this.digital = false;
        this.fun = false;
        this.programming = false;
        this.music = false;
        this.video = true;
        this.writing = false;
        this.business = false;
        break;
      case "writing":
        this.graphics = false;
        this.digital = false;
        this.fun = false;
        this.programming = false;
        this.music = false;
        this.video = false;
        this.writing = true;
        this.business = false;
        break;
      case "programming":
        this.graphics = false;
        this.digital = false;
        this.fun = false;
        this.programming = true;
        this.music = false;
        this.video = false;
        this.writing = false;
        this.business = false;
        break;
      default:
        break;
    }

  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  // file upload method
  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges()

    // The file's download URL
    this.downloadURL = this.task.downloadURL();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
// done by Shreya Khisa 2018

