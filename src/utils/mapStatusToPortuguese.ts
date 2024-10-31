function mapStatusToPortuguese(status: string): string {
  const statusMap: Record<string, string> = {
    Rumored: 'Rumores',
    Planned: 'Planejado',
    'In Production': 'Em Produção',
    'Post Production': 'Pós Produção',
    Released: 'Lançado',
    Cancelled: 'Cancelado',
  };

  return statusMap[status] || status;
}

export default mapStatusToPortuguese;
