export class Project {
	constructor(
	    public id: number,
	    public ownerId: string,
	    public title: string,
	    public description: string,
	    public deadline: Date,
	    public participants?: number
	) {  }
}
