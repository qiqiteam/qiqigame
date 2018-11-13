class InfoBoxItem extends  eui.ItemRenderer 
{
	public des_txt:eui.Label;
	constructor()
	{
		super();
		this.skinName = "InfoBoxItemSkin";
	}

	public childrenCreated() 
    {
        super.childrenCreated();
	}

	 protected dataChanged(): void 
	 {
		 this.des_txt.text = (this.data as InfoBoxData).name;
	 }
}