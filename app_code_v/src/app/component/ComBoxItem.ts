class ComBoxItem extends  eui.ItemRenderer 
{
	public des_txt:eui.Label;
	constructor()
	{
		super();
		this.skinName = "ComBoxItemSkin";
	}

	public childrenCreated() 
    {
        super.childrenCreated();
	}

	 protected dataChanged(): void 
	 {
		 this.des_txt.text = (this.data as ComBoxData).name;
	 }
}