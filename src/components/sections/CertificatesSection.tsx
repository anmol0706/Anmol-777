'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { certificatesData as certificates } from '@/data/portfolio';

interface CertificateCardProps {
    certificate: typeof certificates[0];
    index: number;
    onView: (cert: typeof certificates[0]) => void;
}

function CertificateCard({ certificate, index, onView }: CertificateCardProps) {
    const issuerColors: Record<string, string> = {
        'Amazon Web Services': 'from-orange-500/20 to-yellow-500/20',
        'Meta': 'from-blue-500/20 to-indigo-500/20',
        'Google': 'from-green-500/20 to-blue-500/20',
        'Udemy': 'from-purple-500/20 to-red-500/20',
        'Frontend Masters': 'from-red-500/20 to-pink-500/20',
        'Codecademy': 'from-cyan-500/20 to-blue-500/20',
        'GeeksforGeeks PIEMR': 'from-green-500/20 to-emerald-500/20',
        'IIT Jodhpur TISC': 'from-blue-600/20 to-indigo-600/20',
        'HostKash': 'from-cyan-400/20 to-blue-400/20',
        'SGBS UNNATI FOUNDATION': 'from-orange-400/20 to-amber-400/20',
    };

    const gradientClass = issuerColors[certificate.issuer] || 'from-primary/20 to-secondary/20';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => onView(certificate)}
        >
            <div className="relative h-full rounded-2xl glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-lg">
                {/* Certificate Visual */}
                <div className="relative h-36 overflow-hidden bg-muted">
                    {certificate.image ? (
                        <div className="w-full h-full relative">
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-10 z-10 transition-opacity group-hover:opacity-20`} />

                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay with Action */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="px-4 py-2 rounded-full bg-background/90 text-foreground text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span>View Details</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                            <Award className="w-10 h-10 text-primary opacity-50" />
                        </div>
                    )}

                    {/* Year Badge */}
                    <div className="absolute top-2 right-2 z-30">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-md shadow-sm border border-border/50 text-[10px] px-2 py-0.5 h-auto">
                            {certificate.date}
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-3">
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                            {certificate.issuer}
                        </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {certificate.title}
                    </h3>

                    {/* Minimal Skills */}
                    <div className="flex flex-wrap gap-1">
                        {certificate.skills.slice(0, 3).map((skill) => (
                            <span
                                key={skill}
                                className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded-sm bg-muted/50 border border-border/50"
                            >
                                {skill}
                            </span>
                        ))}
                        {certificate.skills.length > 3 && (
                            <span className="text-[10px] text-muted-foreground px-1.5 py-0.5">
                                +{certificate.skills.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function CertificatesSection() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="certificates"
            ref={ref}
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                        Credentials
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Professional
                        <span className="gradient-text"> Certificates</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Continuous learning and professional development certifications
                    </p>
                </motion.div>

                {/* Certificates Slider */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:mx-0 sm:px-0 scroll-smooth">
                    {certificates.map((cert, index) => (
                        <div key={cert.id} className="min-w-[280px] md:min-w-[320px] snap-center">
                            <CertificateCard
                                certificate={cert}
                                index={index}
                                onView={setSelectedCert}
                            />
                        </div>
                    ))}
                </div>

                {/* Certificate Modal */}
                <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
                    <DialogContent className="sm:max-w-lg glass border-border">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <span>{selectedCert?.title}</span>
                            </DialogTitle>
                            <DialogDescription className="hidden">
                                Detailed view of the certificate including issuer, date, and skills.
                            </DialogDescription>
                        </DialogHeader>
                        {selectedCert && (
                            <div className="space-y-4">
                                {/* Certificate Image Preview */}
                                {selectedCert.image && (
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
                                        <img
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                )}
                                {/* Certificate Details */}
                                <div className="p-4 rounded-xl bg-muted/30 space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Issuer</span>
                                        <span className="text-sm font-medium">{selectedCert.issuer}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Issue Date</span>
                                        <span className="text-sm font-medium">{selectedCert.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Credential ID</span>
                                        <span className="text-sm font-mono">{selectedCert.credentialId}</span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div>
                                    <span className="text-sm text-muted-foreground mb-2 block">Skills Covered</span>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCert.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4">
                                    <Button
                                        asChild
                                        className="flex-1 bg-primary hover:bg-primary/90"
                                    >
                                        <a href={selectedCert.url} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Verify Certificate
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => setSelectedCert(null)}
                                        className="border-border"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
