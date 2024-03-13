using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseManager.Models {
    public class Page {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Color { get; set; } = "#000000";
        public string? Icon { get; set; }
        public List<Note> Notes { get; set; } = new();
        public List<Image> Images { get; set; } = new();
        public List<Table> Tables { get; set; } = new();
        public List<Page> SubPages { get; set; } = new();
        public Page? Parent { get; set; }

    }
}
