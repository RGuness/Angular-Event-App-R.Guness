export class User{
    public start_date:any;
    public venue:any;
    public event_title:any;

    //date
	public get $start_date(): any {
		return this.start_date;
    }
    
    public set $start_date(value: any) {
		this.start_date = value;
    }

    //venue
	public get $venue(): any {
		return this.venue;
    }
    
    public set $venue(value: any) {
		this.venue = value;
    }
    
    //title
	public get $event_title(): any {
		return this.event_title;
	}
    
	public set $event_title(value: any) {
		this.event_title = value;
    }	
}