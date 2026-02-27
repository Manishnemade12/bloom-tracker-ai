
-- Documents table for uploaded files
CREATE TABLE public.documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  status TEXT NOT NULL DEFAULT 'uploaded',
  extracted_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own documents" ON public.documents FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own documents" ON public.documents FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own documents" ON public.documents FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own documents" ON public.documents FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON public.documents FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Financial data table for extracted/manual financial info
CREATE TABLE public.financial_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  financial_year TEXT NOT NULL DEFAULT '2025-26',
  gross_salary NUMERIC DEFAULT 0,
  hra_received NUMERIC DEFAULT 0,
  lta_received NUMERIC DEFAULT 0,
  other_income NUMERIC DEFAULT 0,
  rental_income NUMERIC DEFAULT 0,
  interest_income NUMERIC DEFAULT 0,
  business_income NUMERIC DEFAULT 0,
  deductions_80c NUMERIC DEFAULT 0,
  deductions_80d NUMERIC DEFAULT 0,
  deductions_80e NUMERIC DEFAULT 0,
  deductions_80g NUMERIC DEFAULT 0,
  deductions_nps NUMERIC DEFAULT 0,
  deductions_hra NUMERIC DEFAULT 0,
  deductions_lta NUMERIC DEFAULT 0,
  standard_deduction NUMERIC DEFAULT 75000,
  other_deductions NUMERIC DEFAULT 0,
  raw_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.financial_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own financial data" ON public.financial_data FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own financial data" ON public.financial_data FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own financial data" ON public.financial_data FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own financial data" ON public.financial_data FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_financial_data_updated_at BEFORE UPDATE ON public.financial_data FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Tax analyses table
CREATE TABLE public.tax_analyses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  financial_year TEXT NOT NULL DEFAULT '2025-26',
  old_regime_tax NUMERIC DEFAULT 0,
  new_regime_tax NUMERIC DEFAULT 0,
  recommended_regime TEXT,
  deduction_suggestions JSONB,
  scheme_recommendations JSONB,
  analysis_summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.tax_analyses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own analyses" ON public.tax_analyses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own analyses" ON public.tax_analyses FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own analyses" ON public.tax_analyses FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own analyses" ON public.tax_analyses FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_tax_analyses_updated_at BEFORE UPDATE ON public.tax_analyses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('tax-documents', 'tax-documents', false);

CREATE POLICY "Users can upload own documents" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'tax-documents' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can view own documents" ON storage.objects FOR SELECT USING (bucket_id = 'tax-documents' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete own documents" ON storage.objects FOR DELETE USING (bucket_id = 'tax-documents' AND auth.uid()::text = (storage.foldername(name))[1]);
