namespace DatabaseManager.Models {
    public class Image
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string Uri { get; set; }
        public string Color { get; set; }
        public string? Icon { get; set; }
        public List<Pin> Pins { get; set; }
        public List<Drawing> Drawings { get; set; }
        public List<PostIt> PostIt { get; set; }

        public Page Page { get; set; }
    }



}
