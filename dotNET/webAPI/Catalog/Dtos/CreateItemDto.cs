using System.ComponentModel.DataAnnotations;
namespace Catalog.Dtos
{
    public record CreateItemDto
    {
        [Required]
        public string Name { get; init; }

        [Required]
        [Range(1, 500_000)]
        public decimal Price { get; init; }
    }

}
